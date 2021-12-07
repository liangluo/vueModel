# vueModel
vue 移动端初始模版

## Project introduce
```
1.项目为移动端基础框架，包含了以下功能
   1.1. 移动端适配方案：vw
         1.1.1:按照设计稿的尺寸写px就行；
         1.1.2:引用base.css基础样式
   1.2. 全局样式：variable.scss
   1.3. 封装axios：
         1.3.1:需要修改axiosRequest接口域名来区分环境
         1.3.2:需要修改请求拦截公共参数，没有可删除
   1.4. 封装缓存storage.js
   1.5. 封装路由:router/index.js
   1.6. 封装状态管理机制：根据example例子使用
   1.7. 默认安装vant的组件库，根据项目情况，自行调整UI库
   1.8. 打包使用gzip方案(20201111)
   1.9. 封装tool.js通用工具函数(20201125)
   1.10. 封装filter.js 数据处理函数(20201125)
   1.11. 封装微信分享js(20201204)
   1.12. 组件采用全局注册，在各页面中直接使用（20211112）
   1.13. 封装了部分常用组件（20211112）
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

