# 访问 http://127.0.0.1:8080/index.html

> weexinit

web端SPA、native端多页分别构建。

## getting start

```bash
npm install
```

## file structure

```
    weex-t
      |---android
      |---ios
      |---web
      |---build
      |---assets
      |---extend  native扩展
      |---img 本地图片
      |---dist
      |---app
        |---assets 资源
        |---components组件
        |---pages各个模块
        |---constants
        |---router
        |---utils 功能
        |---app.js web端入口
        |---app.web.vue
        |---mixins.js混合
  ```


## npm scripts

```bash
# build both two js bundles for Weex and Web
npm run build

# build the two js bundles and watch file changes
npm run dev

# start a Web server at 8080 port
npm run serve

# start weex-devtool for debugging with native
npm run debug
```

## notes

You can config more babel, ESLint and PostCSS plugins.
