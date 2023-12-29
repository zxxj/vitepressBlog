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
                text: '基本内容与物体',
                collapsed: true,
                items: [
                  {
                    text: '使用Parcel创建threejs环境',
                    link: '/threejs/1.基本内容与物体/1.使用parcel创建threejs环境.md',
                  },
                  {
                    text: '了解threejs最基本的内容',
                    link: '/threejs/1.基本内容与物体/2.了解threejs最基本的内容.md',
                  },
                  {
                    text: '添加轨道控制器',
                    link: '/threejs/1.基本内容与物体/3.添加轨道控制器.md',
                  },
                  {
                    text: '添加坐标轴辅助器',
                    link: '/threejs/1.基本内容与物体/4.添加坐标轴辅助器.md',
                  },
                  {
                    text: '设置物体的移动',
                    link: '/threejs/1.基本内容与物体/5.设置物体的移动.md',
                  },
                  {
                    text: '设置物体的缩放',
                    link: '/threejs/1.基本内容与物体/6.设置物体缩放.md',
                  },
                  {
                    text: '设置物体的旋转',
                    link: '/threejs/1.基本内容与物体/7.设置物体旋转.md',
                  },
                  {
                    text: 'requestAnimationFrame通过时间参数控制动画',
                    link: '/threejs/1.基本内容与物体/8.requestAnimationFrame通过时间参数正确控制动画运动.md',
                  },
                  {
                    text: '通过Clock时间跟踪对象处理动画',
                    link: '/threejs/1.基本内容与物体/9.通过Clock时间跟踪对象处理动画.md',
                  },
                  {
                    text: '利用gsap实现动画',
                    link: '/threejs/1.基本内容与物体/10.利用gsap实现动画.md',
                  },
                  {
                    text: '轨道控制器开启阻尼',
                    link: '/threejs/1.基本内容与物体/11.轨道控制器开启阻尼.md',
                  },
                  {
                    text: '根据页面尺寸变化实现自适应',
                    link: '/threejs/1.基本内容与物体/12.根据页面尺寸变化实现自适应.md',
                  },
                  {
                    text: '进入全屏与退出全屏',
                    link: '/threejs/1.基本内容与物体/13.双击进入全屏与退出全屏.md',
                  },
                  {
                    text: '使用dat.gui调试threejs物体',
                    link: '/threejs/1.基本内容与物体/14.使用datGUI调试Threejs物体.md',
                  },
                  {
                    text: '使用BufferGeometry设置顶点创建矩形',
                    link: '/threejs/1.基本内容与物体/15.使用BufferGeometry设置顶点创建矩形.md',
                  },
                  {
                    text: '使用BufferGeometry设置顶点生成酷炫三角形',
                    link: '/threejs/1.基本内容与物体/16.使用BufferGeometry设置顶点生成酷炫三角形.md',
                  },
                ],
              },

              {
                text: '材质',
                collapsed: true,
                items: [
                  {
                    text: '设置纹理贴图',
                    link: '/threejs/2.材质/1.设置纹理贴图.md',
                  },
                  {
                    text: '设置纹理的属性',
                    link: '/threejs/2.材质/2.设置纹理的属性.md',
                  },
                  {
                    text: '纹理的显示算法',
                    link: '/threejs/2.材质/3.纹理的显示算法.md',
                  },
                  {
                    text: '设置透明材质与透明纹理',
                    link: '/threejs/2.材质/4.设置透明材质与透明纹理.md',
                  },
                  {
                    text: '设置环境遮挡贴图与强度',
                    link: '/threejs/2.材质/5.设置环境遮挡贴图与设置强度.md',
                  },
                  {
                    text: '学习标准网格材质与设置灯光效果',
                    link: '/threejs/2.材质/6.学习标准网格材质与设置灯光效果.md',
                  },
                  {
                    text: '置换贴图与顶点细分设置',
                    link: '/threejs/2.材质/7.置换贴图与顶点细分设置.md',
                  },
                  {
                    text: '设置粗糙度与粗糙度贴图',
                    link: '/threejs/2.材质/8.设置粗糙度与粗糙度贴图.md',
                  },
                  {
                    text: '设置法线贴图和金属度贴图与强度',
                    link: '/threejs/2.材质/9.设置法线贴图和金属度贴图与强度.md',
                  },
                  {
                    text: '设置加载管理器来查看纹理的加载进度情况',
                    link: '/threejs/2.材质/10.设置加载管理器来查看纹理的加载进度情况.md',
                  },
                  {
                    text: '设置环境纹理贴图',
                    link: '/threejs/2.材质/11.设置环境纹理贴图.md',
                  },
                  {
                    text: '设置场景的背景与加载HDR图',
                    link: '/threejs/2.材质/12.设置场景的背景与加载HDR图.md',
                  },
                ],
              },
              {
                text: '灯光与阴影',
                collapsed: true,
                items: [
                  {
                    text: '灯光与阴影的关系和实现阴影效果',
                    link: '/threejs/3.灯光与阴影/1.灯光与阴影的关系与设置.md',
                  },
                  {
                    text: '平行光的阴影属性',
                    link: '/threejs/3.灯光与阴影/2.平行光的阴影属性.md',
                  },
                  {
                    text: '聚光灯',
                    link: '/threejs/3.灯光与阴影/3.聚光灯.md',
                  },
                  {
                    text: '点光源',
                    link: '/threejs/3.灯光与阴影/4.点光源.md',
                  },
                ],
              },
              {
                text: '粒子效果points',
                collapsed: true,
                items: [
                  {
                    text: '初识points与材质',
                    link: '/threejs/4.粒子效果/1.初识points与材质.md',
                  },
                  {
                    text: '实现星空效果',
                    link: '/threejs/4.粒子效果/2.利用points打造星空.md',
                  },
                  {
                    text: '实现漫天雪花效果',
                    link: '/threejs/4.粒子效果/3.实现漫天雪花.md',
                  },
                ],
              },
              {
                text: '利用投射光线与三维物体进行交互',
                collapsed: true,
                items: [
                  {
                    text: '利用投射光线与三维物体进行交互',
                    link: '/threejs/5.利用投射光线与三维物体进行交互/index.md',
                  },
                ],
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
