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
          {
            text: 'three.js',
            collapsed: true,
            items: [
              {
                text: '使用Parcel创建threejs环境',
                link: '/threejs/1.使用parcel创建threejs环境.md',
              },
              {
                text: '了解threejs最基本的内容',
                link: '/threejs/2.了解threejs最基本的内容.md',
              },
              {
                text: '添加轨道控制器',
                link: '/threejs/3.添加轨道控制器.md',
              },
              {
                text: '添加坐标轴辅助器',
                link: '/threejs/4.添加坐标轴辅助器.md',
              },
              {
                text: '设置物体的移动',
                link: '/threejs/5.设置物体的移动.md',
              },
              {
                text: '设置物体的缩放',
                link: '/threejs/6.设置物体缩放.md',
              },
            ],
          },
          {
            collapsed: true,
            text: 'JavaScript',
            items: [
              {
                text: 'JavaScript的组成',
                link: '/JavaScript/1.JavaScript的组成.md',
              },
              {
                text: 'JavaScript由谁来运行?',
                link: '/JavaScript/2.JavaScript由谁来运行.md',
              },
              {
                text: '认识JavaScript引擎',
                link: '/JavaScript/3.认识JavaScript引擎.md',
              },
              {
                text: 'JavaScript基础语法',
                collapsed: true,
                items: [
                  {
                    text: 'JavaScript的三种编写方式',
                    link: '/JavaScript/5.JavaScript三种编写方式.md',
                  },
                  {
                    text: 'noscript元素',
                    link: '/JavaScript/6.noscript元素.md',
                  },
                  {
                    text: 'JavaScript注意事项',
                    link: '/JavaScript/7.JavaScript编写时的注意事项.md',
                  },
                  {
                    text: 'JavaScript的交互方式',
                    link: '/JavaScript/8.JavaScript的交互方式.md',
                  },
                  {
                    text: 'JavaScript的语句和分号',
                    link: '/JavaScript/9.JavaScript的语句和分号.md',
                  },
                  {
                    text: '变量',
                    link: '/JavaScript/10.变量.md',
                  },
                  {
                    text: '数据类型',
                    link: '/JavaScript/11.数据类型.md',
                  },
                  {
                    text: '运算符',
                    link: '/JavaScript/12.运算符.md',
                  },
                  {
                    text: '程序的执行顺序',
                    link: '/JavaScript/13.程序的执行顺序.md',
                  },
                  {
                    text: '分支语句',
                    link: '/JavaScript/14.分支语句.md',
                  },
                ],
              },
            ],
          },
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
                  {
                    text: '抽象类',
                    link: '/Java/抽象类.md',
                  },
                  {
                    text: '接口',
                    link: '/Java/接口.md',
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
