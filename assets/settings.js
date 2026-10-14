/* 阅读设置：配色 / 字号 / 字体。首屏同步应用，避免刷新时闪一下默认配色。
   页面只需要给设置按钮留一个位置：<span id="settings-slot"></span>
   设置存在 localStorage，键名 pt-settings。 */
(function () {
  var KEY = 'pt-settings';
  var DEFAULTS = { theme: 'anthropic', size: 16, font: 'auto' };
  var THEMES = [
    { id: 'anthropic', name: 'Anthropic', bg: '#FAF9F5', fg: '#D97757' },
    { id: 'html', name: '标准 HTML', bg: '#FFFFFF', fg: '#0000EE' },
    { id: 'github', name: 'GitHub', bg: '#0D1117', fg: '#58A6FF' },
    { id: 'mocha', name: 'Catppuccin', bg: '#1E1E2E', fg: '#CBA6F7' }
  ];
  var FONTS = [{ id: 'auto', name: '跟随主题' }, { id: 'sans', name: '无衬线' }, { id: 'serif', name: '衬线' }];

  var state = read();

  function read() {
    var s = { theme: DEFAULTS.theme, size: DEFAULTS.size, font: DEFAULTS.font };
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var saved = JSON.parse(raw);
        if (saved.theme) s.theme = saved.theme;
        if (saved.font) s.font = saved.font;
        var n = parseInt(saved.size, 10);
        if (n >= 14 && n <= 22) s.size = n;
      }
    } catch (e) { /* file:// 或隐私模式下 localStorage 不可用，用默认值 */ }
    return s;
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { }
  }

  function apply() {
    var root = document.documentElement;
    root.dataset.theme = state.theme;
    root.dataset.font = state.font;
    root.style.setProperty('--fs', state.size + 'px');
  }

  apply();

  // 字号/配色变化后，通知页面上的图或组件重新测量（可选，页面不监听也没关系）
  function notify() {
    try { window.dispatchEvent(new Event('pt-settings-change')); } catch (e) { }
  }

  function set(patch) {
    for (var k in patch) state[k] = patch[k];
    apply();
    save();
    sync();
    notify();
  }

  // ---------- 面板 ----------

  var panel, btn, sizeInput, sizeOut;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function chip(text, active, onPick, swatch) {
    var b = el('button', 'chip');
    b.type = 'button';
    b.setAttribute('aria-pressed', active ? 'true' : 'false');
    if (swatch) {
      var s = el('span', 'swatch');
      s.style.setProperty('--sw-bg', swatch[0]);
      s.style.setProperty('--sw-fg', swatch[1]);
      b.appendChild(s);
    }
    b.appendChild(el('span', null, text));
    b.addEventListener('click', onPick);
    return b;
  }

  function row(label, node) {
    var r = el('div', 'settings-row');
    r.appendChild(el('span', 'settings-label', label));
    r.appendChild(node);
    return r;
  }

  function build() {
    panel = el('div', 'settings');
    panel.id = 'pt-settings';
    panel.hidden = true;

    var chips = el('div', 'chips');
    panel._themeChips = chips;
    THEMES.forEach(function (t) {
      chips.appendChild(chip(t.name, state.theme === t.id, function () { set({ theme: t.id }); }, [t.bg, t.fg]));
    });
    panel.appendChild(row('配色', chips));

    sizeInput = el('input');
    sizeInput.type = 'range';
    sizeInput.min = 14;
    sizeInput.max = 22;
    sizeInput.step = 1;
    sizeInput.value = state.size;
    sizeInput.setAttribute('aria-label', '字号');
    sizeOut = el('output', null, state.size + 'px');
    sizeInput.addEventListener('input', function () {
      sizeOut.textContent = sizeInput.value + 'px';
      set({ size: parseInt(sizeInput.value, 10) });
    });
    var sizeRow = el('div', 'settings-row');
    sizeRow.appendChild(el('span', 'settings-label', '字号'));
    sizeRow.appendChild(sizeInput);
    sizeRow.appendChild(sizeOut);
    panel.appendChild(sizeRow);

    var fchips = el('div', 'chips');
    panel._fontChips = fchips;
    FONTS.forEach(function (f) {
      fchips.appendChild(chip(f.name, state.font === f.id, function () { set({ font: f.id }); }));
    });
    panel.appendChild(row('字体', fchips));

    var foot = el('div', 'settings-foot');
    var reset = el('button', 'btn', '恢复默认');
    reset.type = 'button';
    reset.addEventListener('click', function () { set({ theme: DEFAULTS.theme, size: DEFAULTS.size, font: DEFAULTS.font }); sizeInput.value = state.size; });
    foot.appendChild(reset);
    panel.appendChild(foot);

    document.body.appendChild(panel);

    document.addEventListener('click', function (e) {
      if (panel.hidden) return;
      if (panel.contains(e.target) || (btn && btn.contains(e.target))) return;
      toggle(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !panel.hidden) toggle(false);
    });

    sync();
  }

  function sync() {
    if (!panel) return;
    [['_themeChips', 'theme'], ['_fontChips', 'font']].forEach(function (pair) {
      var list = pair[0] === '_themeChips' ? THEMES : FONTS;
      var kids = panel[pair[0]].children;
      for (var i = 0; i < kids.length; i++) {
        kids[i].setAttribute('aria-pressed', list[i].id === state[pair[1]] ? 'true' : 'false');
      }
    });
    if (sizeInput) sizeInput.value = state.size;
    if (sizeOut) sizeOut.textContent = state.size + 'px';
  }

  function toggle(open) {
    if (!panel) return;
    var next = open == null ? panel.hidden : open;
    panel.hidden = !next;
    if (btn) btn.setAttribute('aria-expanded', next ? 'true' : 'false');
  }

  function init() {
    build();
    var slot = document.getElementById('settings-slot');
    btn = el('button', 'btn', 'Aa 阅读设置');
    btn.type = 'button';
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', function () { toggle(); });
    (slot || document.body).appendChild(btn);
    if (!slot) {
      btn.style.position = 'fixed';
      btn.style.right = '16px';
      btn.style.bottom = '16px';
      btn.style.zIndex = '40';
      btn.style.boxShadow = 'var(--shadow)';
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  window.PT = window.PT || {};
  window.PT.settings = { get: function () { return { theme: state.theme, size: state.size, font: state.font }; }, set: set };
})();
