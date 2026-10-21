/* 本库的页面清单，修改标题和增加页面相关操作仅需修改此清单
   title 库名 · home 返回总目录 · source 原文地址 · updated 译文更新日期
   pages 平铺清单（上下页导航用）· sections 侧栏分组（按章折叠，当前页所在组默认展开） */
window.PT_DOC = {
  title: 'Nannou Guide 中文译本',
  home: '../index.html',
  source: 'https://guide.nannou.cc/',
  updated: '2026-10-21',
  pages: [
    { href: 'index.html', title: '欢迎！' },
    { href: 'why_nannou.html', title: '为什么选择 Nannou？' },
    { href: 'getting_started.html', title: '入门' },
    { href: 'platform-specific_setup.html', title: '平台相关设置' },
    { href: 'installing_rust.html', title: '安装 Rust' },
    { href: 'editor_setup.html', title: '编辑器设置' },
    { href: 'running_examples.html', title: '运行示例' },
    { href: 'create_a_project.html', title: '创建项目' },
    { href: 'updating.html', title: '更新 nannou' },
    { href: 'tutorials.html', title: '教程' },
    { href: 'anatomy-of-a-nannou-app.html', title: 'nannou 应用剖析' },
    { href: 'draw-a-sketch.html', title: '绘制草图' },
    { href: 'sketch-vs-app.html', title: '基础 - `sketch` 与 `app`' },
    { href: 'window-coordinates.html', title: '基础 - 窗口坐标' },
    { href: 'drawing-2d-shapes.html', title: '绘制二维图形' },
    { href: 'animating-a-circle.html', title: '让圆形动起来' },
    { href: 'drawing-images.html', title: '绘制图像' },
    { href: 'osc-introduction.html', title: 'OSC 入门' },
    { href: 'osc-sender.html', title: '发送 OSC' },
    { href: 'osc-receiver.html', title: '接收 OSC' },
    { href: 'community_tutorials.html', title: '社区教程' },
    { href: 'contributing.html', title: '参与贡献' },
    { href: 'about-the-codebase.html', title: '关于代码库' },
    { href: 'pr-checklist.html', title: 'PR 检查清单' },
    { href: 'pr-reviews.html', title: 'PR 评审' },
    { href: 'publishing-new-versions.html', title: '发布新版本' },
    { href: 'nix-shell.html', title: 'Nix Shell' },
    { href: 'developer_reference.html', title: '开发者参考' },
    { href: 'api_reference.html', title: 'API 参考' },
    { href: 'showcases.html', title: '作品展示' }
  ],
  sections: [
    { title: '开始', pages: ['index.html', 'why_nannou.html'] },
    { title: '入门', pages: ['getting_started.html', 'platform-specific_setup.html', 'installing_rust.html', 'editor_setup.html', 'running_examples.html', 'create_a_project.html', 'updating.html'] },
    { title: '教程', pages: ['tutorials.html', 'anatomy-of-a-nannou-app.html', 'draw-a-sketch.html', 'sketch-vs-app.html', 'window-coordinates.html', 'drawing-2d-shapes.html', 'animating-a-circle.html', 'drawing-images.html', 'osc-introduction.html', 'osc-sender.html', 'osc-receiver.html'] },
    { title: '社区与贡献', pages: ['community_tutorials.html', 'contributing.html', 'about-the-codebase.html', 'pr-checklist.html', 'pr-reviews.html', 'publishing-new-versions.html', 'nix-shell.html'] },
    { title: '参考与展示', pages: ['developer_reference.html', 'api_reference.html', 'showcases.html'] }
  ]
};
