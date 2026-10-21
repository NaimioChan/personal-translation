/* 本库的页面清单，修改标题和增加页面相关操作仅需修改此清单
   title 库名 · home 返回总目录 · source 原文地址 · updated 译文更新日期
   pages 平铺清单（上下页导航用）· sections 侧栏分组（按章折叠，当前页所在章默认展开） */
window.PT_DOC = {
  title: 'ofBook',
  home: '../index.html',
  source: 'https://openframeworks.cc/ofBook/chapters/foreword.html',
  updated: '2026-10-20',
  pages: [
    { href: 'index.html', title: '前言' },
    { href: 'of_philosophy.html', title: '理念' },
    { href: 'cplusplus_basics.html', title: 'C++ 语言基础' },
    { href: 'setup_and_project_structure.html', title: 'oF 结构' },
    { href: 'intro_to_graphics.html', title: '图形' },
    { href: 'oops.html', title: 'Ooops！= 面向对象编程 + 类' },
    { href: 'how_of_works.html', title: 'openFrameworks 如何工作' },
    { href: 'animation.html', title: '动画' },
    { href: 'game_design.html', title: '实验性游戏开发' },
    { href: 'image_processing_computer_vision.html', title: '图像处理与计算机视觉' },
    { href: 'hardware.html', title: '硬件' },
    { href: 'sound.html', title: '声音' },
    { href: 'network.html', title: '网络' },
    { href: 'openGL.html', title: '为 oF 介绍 OpenGL' },
    { href: 'lines.html', title: '绘制线条' },
    { href: 'generativemesh.html', title: '从图像生成网格的基础' },
    { href: 'advanced_graphics.html', title: '高级图形' },
    { href: 'textures.html', title: '在 3D 图元上使用纹理' },
    { href: 'shaders.html', title: '着色器入门' },
    { href: 'threads.html', title: '线程' },
    { href: 'memory.html', title: 'C++ 中的内存' },
    { href: 'stl_vector.html', title: 'vector 简介' },
    { href: 'stl_map.html', title: '玩转 map，尤其是 std::map' },
    { href: 'c++11.html', title: 'C++ 11' },
    { href: 'math.html', title: '数学：从 1D 到 4D' },
    { href: 'ios.html', title: 'ofxiOS' },
    { href: 'version_control_with_git.html', title: '用 Git 做版本控制' },
    { href: 'ofSketch.html', title: 'ofSketch' },
    { href: 'installation_up_4evr_macosx.html', title: '安装 up 4evr' },
    { href: 'installation_up_4evr_linux.html', title: '安装 up 4evr - Linux' },
    { href: 'project_eva.html', title: '为人类与星辰编舞' },
    { href: 'project_joel.html', title: '人类世' }
  ],
  sections: [
    { title: "前言", pages: [
      "index.html"
    ] },
    { title: "基础", pages: [
      "of_philosophy.html",
      "cplusplus_basics.html",
      "setup_and_project_structure.html",
      "intro_to_graphics.html",
      "oops.html",
      "how_of_works.html"
    ] },
    { title: "方法", pages: [
      "animation.html",
      "game_design.html",
      "image_processing_computer_vision.html"
    ] },
    { title: "输入输出", pages: [
      "hardware.html",
      "sound.html",
      "network.html"
    ] },
    { title: "图形", pages: [
      "openGL.html",
      "lines.html",
      "generativemesh.html",
      "advanced_graphics.html",
      "textures.html",
      "shaders.html"
    ] },
    { title: "C++", pages: [
      "threads.html",
      "memory.html",
      "stl_vector.html",
      "stl_map.html",
      "c++11.html"
    ] },
    { title: "进阶主题", pages: [
      "math.html"
    ] },
    { title: "平台", pages: [
      "ios.html"
    ] },
    { title: "工具", pages: [
      "version_control_with_git.html",
      "ofSketch.html",
      "installation_up_4evr_macosx.html",
      "installation_up_4evr_linux.html"
    ] },
    { title: "案例研究", pages: [
      "project_eva.html",
      "project_joel.html"
    ] }
  ]
};
