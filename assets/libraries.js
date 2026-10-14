/* 文档库清单：目录页读这个文件渲染列表。
   每完成一个文档库，在这里加一条，然后刷新 index.html 即可。
   字段：dir 库文件夹名（必填）、title 库标题（必填）、desc 一句话说明、
        source 原文地址、updated 译文最后更新日期、pages 页面数。 */
window.PT_LIBRARIES = [
  // { dir: 'example-library', title: '示例文档库', desc: '一句话说明这个库收了什么文档。',
  //   source: 'https://example.com/docs', updated: '2026-10-13', pages: 3 }
  { dir: 'maxon-autograph', title: 'Maxon Autograph 帮助文档',
    desc: 'Maxon Autograph 官方英文文档的中文译本。',
    source: 'https://help.maxon.net/ag/en-us/',
    updated: '2026-10-14', pages: 388 },
  { dir: 'puredata-docs', title: 'Pure Data 文档',
    desc: 'puredata.info 文档章节的中文译本。',
    source: 'https://puredata.info/docs',
    updated: '2026-10-14', pages: 229 },
  { dir: 'plugdata-docs', title: 'plugdata 文档',
    desc: 'plugdata 官方文档的中文译本。',
    source: 'https://plugdata.org/docs.html',
    updated: '2026-10-14', pages: 7 },
  { dir: 'plugdata-reference', title: 'plugdata 对象参考',
    desc: 'plugdata 官方对象参考的中文译本。',
    source: 'https://plugdata.org/reference.html',
    updated: '2026-10-14', pages: 1654 },
                    { dir: 'cycling74-reference', title: 'Max 对象与操作符参考',
    desc: 'Cycling \'74 官方对象与操作符参考的中文译本。',
    source: 'https://docs.cycling74.com/reference/',
    updated: '2026-10-14', pages: 1818 }
];
