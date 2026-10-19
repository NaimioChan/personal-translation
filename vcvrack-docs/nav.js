/* 本库的页面清单，修改标题和增加页面相关操作仅需修改此清单
   title 库名 · home 返回总目录 · source 原文地址 · updated 译文更新日期
   pages 平铺清单（上下页导航用）· sections 侧栏分组（按章折叠，当前页所在章默认展开） */
window.PT_DOC = {
  title: 'VCV Rack 手册',
  home: '../index.html',
  source: 'https://vcvrack.com/manual/',
  updated: '2026-10-19',
  pages: [
    { href: 'index.html', title: '手册首页' },
    { href: 'installing.html', title: '安装与运行' },
    { href: 'getting-started.html', title: '上手指南' },
    { href: 'menu-bar.html', title: '菜单栏' },
    { href: 'key-commands.html', title: '快捷键' },
    { href: 'core-modules.html', title: '核心模块' },
    { href: 'polyphony.html', title: '复音' },
    { href: 'rack-pro.html', title: 'Rack Pro 功能' },
    { href: 'plugin-development-tutorial.html', title: '插件开发教程' },
    { href: 'plugin-guide.html', title: '插件 API 指南' },
    { href: 'panel.html', title: '面板' },
    { href: 'manifest.html', title: '插件清单' },
    { href: 'presets.html', title: '模块预设' },
    { href: 'voltage-standards.html', title: '电压标准' },
    { href: 'dsp.html', title: '数字信号处理' },
    { href: 'migrate2.html', title: '迁移 v1 插件' },
    { href: 'plugin-licensing.html', title: '插件许可' },
    { href: 'building.html', title: '构建' },
    { href: 'version.html', title: '版本管理' },
    { href: 'faq.html', title: '常见问题' },
    { href: 'communities.html', title: '社区' },
    { href: 'about.html', title: '关于 VCV' }
  ],
  sections: [
    { title: 'Rack', pages: ['installing.html', 'getting-started.html', 'menu-bar.html', 'key-commands.html', 'core-modules.html', 'polyphony.html', 'rack-pro.html'] },
    { title: '插件开发', pages: ['plugin-development-tutorial.html', 'plugin-guide.html', 'panel.html', 'manifest.html', 'presets.html', 'voltage-standards.html', 'dsp.html', 'migrate2.html', 'plugin-licensing.html'] },
    { title: 'Rack 开发', pages: ['building.html', 'version.html'] },
    { title: '附录', pages: ['faq.html', 'communities.html', 'about.html'] }
  ]
};
