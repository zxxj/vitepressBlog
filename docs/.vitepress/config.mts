import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/vitepressBlog/',
  title: 'dusk',
  // description: 'this is my learning blog!!!', // seo
  themeConfig: {
    // aside: false,
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: 'HTML', link: '/html/index.md' },
      {
        text: 'Java',
        items: [
          {
            text: '基础语法',
            link: '/Java/basic.md',
          },
          {
            text: '面向对象',
            link: '/Java/oop.md',
          },
        ],
      },
    ],

    sidebar: [
      {
        text: '导航',
        items: [
          { text: 'HTML', link: '/html/index.md' },
          { text: 'three.js', link: '/threejs/index.md' },
          {
            collapsed: true,
            text: 'Java',
            items: [
              {
                text: '基础语法',
                link: '/Java/basic',
              },
              {
                text: '面向对象',
                collapsed: true,
                items: [
                  {
                    text: '类与对象',
                    link: '/Java/类与对象.md',
                  },
                  {
                    text: '属性',
                    link: '/Java/属性.md',
                  },
                  {
                    text: '方法(Method)',
                    link: '/Java/方法.md',
                  },
                  {
                    text: '方法重载(overLoad)',
                    link: '/Java/方法重载.md',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],

    algolia: {
      appId: 'R2IYF7ETH7',
      apiKey: '599cec31baffa4868cae4e79f180729b',
      indexName: 'index',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/zxxj' }],
    footer: {
      message: '如果不够幸运 那就多努力一点吧 ~',
      copyright: '2023.11.15 @dusk',
    },
    docFooter: {
      prev: '上一篇文章',
      next: '下一篇文章',
    },
  },
});
