const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

// xxxx表示项目名称
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/xxxx' : '/', // 部署应用包时的基本URL
  outputDir: 'xxxx', // build后文件目录
  assetsDir: './assets', // 静态资源打包地址
  indexPath: 'index.html', // index.html输入路径
  filenameHashing: true, // 静态资源带hash
  pages: undefined,
  lintOnSave: true, // 保存时是否用eslint-loader来lint代码
  runtimeCompiler: false, // 是否使用包含运行时编译的Vue内核版本，可以在vue中使用template,应用增加10Kb左右；
  transpileDependencies: [], // 通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  productionSourceMap: false, // 设置为false,加速生产环境的构建；
  crossorigin: undefined, // 生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性
  integrity: false, // 启用该选项可以提供额外的安全性
  chainWebpack: (config) => {
    config.module.rule('images').use('url-loader').loader('url-loader').tap((options) => Object.assign(options, { limit: 10240 })); // 修改图片转为base64的限制规则
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
        return {
            plugins: [
                new CompressionPlugin({
                    algorithm: 'gzip',
                    test: /\.js$|\.html$|\.css$/,
                    threshold: 1000,
                    deleteOriginalAssets: false,
                    minRatio: 0.8,
                }),
            ],
        };
    }
  },
  // 跨域设置
  devServer: {
    open: true, // 自动打开浏览器配置
    host: 'localhost', // 启动地址
    port: 8080, // 端口
    https: false,
    hotOnly: true, // 热更新
    overlay: {
      warnings: false, // 不显示警告
      errors: false,
    },
    // proxy: {
    //   '/api': {
    //     //target: 'http://www.zxinhb.com', // 要代理的后台地址
    //     target: 'http://116.162.55.189:81', // 要代理的后台地址
    //     //target: 'http://wgwl.woread.com.cn', // 要代理的后台地址
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/', // 通过pathRewrite重写地址，将前缀/api转为/
    //     },
    //   },
    // },
  },

  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/_variable.scss";',
      },
    },
  },
};
