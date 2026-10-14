## 该 README.md 文件原则上只读，如需要修改请向用户获取一次性权限

# 新建文档库

把 `_skeleton/` 整个复制成库目录，修改复制后的库。禁止修改模板。

## 步骤

1. 复制目录（库目录必须在仓库根下，名字用英文短横线）：

   ```bash
   cp -r _skeleton <库目录名>
   ```

2. 改 `<库目录名>/nav.js`：`title` 库名、`source` 原文地址、`updated` 译文更新日期、`pages` 页面清单（文件名 + 中文标题，顺序就是侧栏顺序）。
3. 一个原文页面存成一个 HTML 文件：复制 `page.html`，改文件名，替换 `<h1>` 之后的正文。
4. 对应改 `nav.js` 的 `pages`，每个文件加一条。
5. 在仓库根的 `assets/libraries.js` 里加一条，总目录页就会列出这个库。

## 页面结构

```html
<header class="topbar">…</header>
<div class="layout">
  <aside class="sidebar" id="pt-sidebar"></aside>   <!-- 目录由 doc.js 生成，留空 -->
  <main class="article"> …正文… </main>
</div>
<script src="nav.js"></script>
<script src="../assets/doc.js"></script>
```

`<head>` 里引 `../assets/theme.css` 和 `../assets/settings.js`，`<html>` 上保留 `data-theme` / `data-font` 两个属性（默认值，用户设置会覆盖）。

## 目录搜索

侧栏顶部有一条搜索栏，由 `assets/doc.js` 生成，页面与模板里不需要写任何标记：输入关键词即时过滤侧栏条目
（页面标题，以及当前页的 `h2`/`h3` 小节链接），命中条目所在的分组自动展开、整组无命中的分组隐藏，
清空后恢复原来的分组展开状态。快捷键：`/` 聚焦搜索框，`Esc` 清空并失焦。

## 正文写法

- 直接写 HTML：`h1`~`h4`、`p`、`ul`/`ol`、`pre><code`、`table`、`blockquote`、`hr`、`strong`/`em`。
- `h2`/`h3` 不用写 `id`，`doc.js` 按标题文字生成锚点，侧栏目录和滚动高亮也由它做。
- 页面末尾保留 `.doc-meta`（原文地址 + 更新日期），中间页保留 `<div class="page-nav" id="pt-page-nav"></div>`，上下页链接自动填充。
- 颜色和字号：用 `assets/theme.css` 里的变量（`var(--fg)`、`var(--bg-soft)`、`var(--border)`、`var(--accent)` 等）。

## 阅读设置

顶栏右侧的「Aa 阅读设置」对所有页面生效，选择存在 localStorage：

- 当前配色：Anthropic 护眼亮色（默认）、标准 HTML 亮色、GitHub 暗色、Catppuccin Mocha 暗色
- 字号 14px ~ 22px
- 字体 跟随主题 / 无衬线 / 衬线（标准 HTML 主题默认衬线）
