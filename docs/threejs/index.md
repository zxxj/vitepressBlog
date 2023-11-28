## 使用 parcel 搭建 threejs 开发环境

```js
1.新监空文件夹
2.初始化package.json: npm init
3.安装parcel: npm install parcel-bundler
4.参考官网后修改package.json,如下:
	{
  	"scripts": {
    	"dev": "parcel <your entry file>", // 打包的入口文件
      "build": "parcel build <your entry file>" // 打包的入口文件
    }
  }

5.新建src目录,新建index.html文件,再次修改package.json
{
  "name": "threejs",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "parcel src/index.html",
    "build": "parcel build src/index.html"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "parcel-bundler": "^1.12.5"
  }
}

6.新建assets静态资源文件,包含css与images文件夹,src根目录下创建main.js入口文件
7.index.html文件中使用link引入css,
  使用script模块化方式引入main.js,
  main.js中引入threejs

8.运行pnpm run dev,会生成dist目录,打开网页,样式生效与打印了threejs,环境搭建完成~

```
