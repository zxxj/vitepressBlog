import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitepressBlog/',
  title: 'dusk',
  // description: 'this is my learning blog!!!', // seo
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: 'HTML', link: '/html/index.md' },
      { text: 'CSS', link: '/css/index.md' },
      { text: 'JavaScript', link: '/JavaScript/index.md' },
      { text: 'library', link: '/library/index.md' },
      { text: '网络', link: '/NetWork/index.md' },
      { text: '难点总结', link: '/difficult/index.md' },
      { text: '日记', link: '/diary/index.md' },
      // { text: 'examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '导航',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'HTML', link: '/html/index.md' },
          { text: 'CSS', link: '/css/index.md' },
          {
            text: 'JavaScript',
            items: [
              {
                text: '基础语法',
                link: '/JavaScript/basic',
              },
              {
                text: '高级进阶',
                link: '/JavaScript/upgrade',
              },
            ],
          },
          { text: 'library', link: '/library/index.md' },
          {
            text: '难点总结',
            items: [
              {
                text: 'HTML',
                link: '/difficult/html',
              },
              {
                text: 'CSS',
                link: '/difficult/css',
              },
              {
                text: 'JS',
                link: '/difficult/js',
              },
              {
                text: 'VbenAdmin',
                link: '/difficult/vben-admin',
              },
              {
                text: 'Echarts',
                link: '/difficult/echarts',
              },
            ],
          },
          { text: '日记', link: '/diary/index.md' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/zxxj' }],
    footer: {
      message: '如果不够幸运 那就多努力一点吧 ~',
      copyright: '2023.11.15 @dusk',
    },
  },
});
