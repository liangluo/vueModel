module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': {
      // 实现Retina屏1像素边框
      utf8: false,
    },
    'postcss-cssnext': {}, // 让我们使用CSS未来的特性，其会对这些特性做相关的兼容性处理；
    'postcss-px-to-viewport': {
      // 主要用来把px单位转换为vw、vh、vmin或者vmax这样的视窗单位
      viewportWidth: 828, // (Number) 视窗的宽度，对应的是我们设计稿的宽度，一般是750
      viewportHeight: 1334, // (Number) 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3, // (Number) 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      viewportUnit: 'vw', // (String) 指定需要转换成的视窗单位，建议使用vw.
      selectorBlackList: ['.ignore', '.hairlines'], // (Array) 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
      minPixelValue: 1, // (Number) 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false, // (Boolean) 许在媒体查询中转换`px.
      exclude: /(\/|\\)(node_modules)(\/|\\)/, //适配node_modules中的不转换
    },
    'postcss-viewport-units': {
      filterRule: (rule) => rule.selector.indexOf('::after') === -1
        && rule.selector.indexOf('::before') === -1
        && rule.selector.indexOf(':after') === -1
        && rule.selector.indexOf(':before') === -1,
    },
    cssnano: {
      'cssnano-preset-advanced': {
        zindex: false,
        autoprefixer: false,
      },
    },
  },
};
