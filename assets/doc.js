/* 文档页导航：侧栏目录（库内页面 + 当前页标题）、滚动高亮、窄屏抽屉、上下页。
   页面里放一个空的 <aside class="sidebar" id="pt-sidebar"></aside> 即可，
   库信息在库根目录的 nav.js 里声明（window.PT_DOC）。 */
(function () {
  var doc = window.PT_DOC || {};
  var aside = document.getElementById('pt-sidebar');
  var art = document.querySelector('.article') || document.querySelector('main');
  if (!art) return;

  var pages = doc.pages || [];
  var here = currentFile();
  var hereIndex = -1;
  for (var i = 0; i < pages.length; i++) {
    if (sameFile(pages[i].href, here)) { hereIndex = i; break; }
  }

  // ---------- 当前页的标题 ----------
  var heads = [].slice.call(art.querySelectorAll('h2, h3'));
  var seen = Object.create(null);
  heads.forEach(function (h, i) {
    if (!h.id) {
      var slug = (h.textContent || '').trim().toLowerCase()
        .replace(/[\s]+/g, '-')
        .replace(/[^\w\u4e00-\u9fa5-]/g, '')
        .replace(/^-+|-+$/g, '') || ('s-' + (i + 1));
      if (seen[slug]) { seen[slug]++; slug = slug + '-' + seen[slug]; } else { seen[slug] = 1; }
      h.id = slug;
    }
  });

  // ---------- 侧栏 ----------
  if (aside) {
    var nav = document.createElement('nav');
    nav.className = 'toc';

    if (doc.home) {
      var back = document.createElement('a');
      back.className = 'toc-back';
      back.href = doc.home;
      back.textContent = '← 全部文档库';
      nav.appendChild(back);
    }
    if (doc.title) {
      var lib = document.createElement('div');
      lib.className = 'toc-lib';
      lib.textContent = doc.title;
      nav.appendChild(lib);
    }

    var byHref = Object.create(null);
    pages.forEach(function (p) { byHref[p.href] = p; });

    function pageItem(href) {
      var p = byHref[href] || { href: href };
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = p.href;
      a.textContent = p.title || p.href;
      li.appendChild(a);

      if (sameFile(p.href, here)) {
        li.className = 'current';
        if (heads.length) {
          var sub = document.createElement('ol');
          sub.className = 'toc-subs';
          heads.forEach(function (h) {
            var sli = document.createElement('li');
            var sa = document.createElement('a');
            sa.href = '#' + h.id;
            sa.textContent = h.textContent;
            if (h.tagName === 'H3') sa.style.paddingLeft = '1.1em';
            sli.appendChild(sa);
            sub.appendChild(sli);
          });
          li.appendChild(sub);
        }
      }
      return li;
    }

    if (Object.prototype.toString.call(doc.sections) === '[object Array]' && doc.sections.length) {
      // 分组侧栏：每章一个可折叠块，当前页所在章默认展开
      doc.sections.forEach(function (sec) {
        var box = document.createElement('details');
        box.className = 'toc-section';
        var sum = document.createElement('summary');
        sum.textContent = sec.title || '';
        sum.style.cursor = 'pointer';
        sum.style.fontWeight = '600';
        sum.style.fontSize = '.92em';
        sum.style.margin = '.75em 0 .25em';
        sum.style.color = 'var(--fg-muted)';
        box.appendChild(sum);

        var ol = document.createElement('ol');
        ol.className = 'toc-pages';
        var open = false;
        (sec.pages || []).forEach(function (href) {
          ol.appendChild(pageItem(href));
          if (sameFile(href, here)) open = true;
        });
        box.appendChild(ol);
        if (open) box.open = true;
        nav.appendChild(box);
      });
    } else {
      var ol = document.createElement('ol');
      ol.className = 'toc-pages';
      pages.forEach(function (p) { ol.appendChild(pageItem(p.href)); });
      nav.appendChild(ol);
    }
    aside.appendChild(nav);

    // 窄屏：点目录跳转后收起抽屉
    aside.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') document.body.classList.remove('nav-open');
    });
  }

  // ---------- 滚动高亮 ----------
  var links = [].slice.call(document.querySelectorAll('.toc-subs a'));
  if (links.length) {
    var ticking = false;
    function spy() {
      ticking = false;
      var line = (parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h'), 10) || 48) + 24;
      var best = null;
      heads.forEach(function (h) {
        if (h.getBoundingClientRect().top <= line) best = h;
      });
      if (!best) best = heads[0];
      links.forEach(function (a) {
        a.classList.toggle('active', best && a.getAttribute('href') === '#' + best.id);
      });
    }
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      setTimeout(spy, 80);
    }, { passive: true });
    spy();
  }

  // ---------- 窄屏抽屉 ----------
  var tocBtn = document.querySelector('.toc-btn');
  if (tocBtn) {
    tocBtn.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      tocBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // ---------- 上下页 ----------
  var foot = document.getElementById('pt-page-nav');
  if (foot && hereIndex >= 0) {
    var prev = pages[hereIndex - 1];
    var next = pages[hereIndex + 1];
    var left = document.createElement('span');
    var right = document.createElement('span');
    if (prev) { left = document.createElement('a'); left.href = prev.href; left.textContent = '← ' + (prev.title || prev.href); }
    if (next) { right = document.createElement('a'); right.href = next.href; right.textContent = (next.title || next.href) + ' →'; }
    foot.appendChild(left);
    foot.appendChild(right);
  }

  // ---------- 小工具 ----------
  function currentFile() {
    var p = decodeURIComponent(location.pathname);
    var file = p.substring(p.lastIndexOf('/') + 1);
    return file || 'index.html';
  }

  function sameFile(href, file) {
    if (!href) return false;
    var h = decodeURIComponent(String(href).split('#')[0]);
    h = h.substring(h.lastIndexOf('/') + 1);
    return (h || 'index.html') === file;
  }
})();
