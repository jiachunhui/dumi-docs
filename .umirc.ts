import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Aiyy bolg',
  mode: 'site',
  // more config: https://d.umijs.org/config
  navs: [
    null,

    {
      title: '链接',
      path: 'https://github.com/jiachunhui',
      children: [
        { title: 'Github', path: 'https://github.com/jiachunhui' },
        { title: 'Furion', path: 'https://dotnetchina.gitee.io/furion/' },
        {title:'Markdown 官方教程',path:'https://markdown.com.cn/cheat-sheet.html'}
      ],
    },
  ],
});
