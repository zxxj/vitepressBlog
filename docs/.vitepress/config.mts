import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/vitepressBlog/',
  title: 'dusk',
  head: [
    ['link', { rel: 'icon', type: 'image/png+xml', href: '../public/3.png' }],
  ],
  // description: 'this is my learning blog!!!', // seo

  markdown: {
    lineNumbers: true, // 是否显示行数，默认false
  },
  themeConfig: {
    // aside: false,
    logo: '/3.png',
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
                text: '方法(Method)',
                link: '/Java/方法.md',
              },
              {
                text: '方法重载(overLoad)',
                link: '/Java/方法重载.md',
              },
              {
                text: '可变参数',
                link: '/Java/可变参数.md',
              },
              {
                text: '递归',
                link: '/Java/方法的递归调用.md',
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
                    text: '类的成员',
                    link: '/Java/类的成员.md',
                  },
                  {
                    text: '成员变量',
                    link: '/Java/成员变量.md',
                  },
                  {
                    text: '包',
                    link: '/Java/包.md',
                  },
                  {
                    text: '成员方法',
                    link: '/Java/成员方法.md',
                  },
                  {
                    text: '静态方法和非静态方法的区别',
                    link: '/Java/静态方法和非静态方法的区别.md',
                  },
                  {
                    text: '对象数组',
                    link: '/Java/对象数组.md',
                  },
                  {
                    text: '构造器',
                    link: '/Java/构造器.md',
                  },
                  {
                    text: '封装',
                    link: '/Java/封装.md',
                  },
                  {
                    text: '继承',
                    link: '/Java/继承.md',
                  },
                  {
                    text: '方法重写',
                    link: '/Java/方法重写.md',
                  },
                  {
                    text: '多态',
                    link: '/Java/多态.md',
                  },
                  {
                    text: 'final',
                    link: '/Java/final.md',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],

    search: {
      // vitepress 内置 search
      provider: 'local',
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
