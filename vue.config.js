module.exports = {
  // build輸出目錄
  outputDir: 'dist',

  // 靜態資源目錄（js, css, img）
  assetsDir: 'assets',

  // 是否開啟eslint
  lintOnSave: false,

  // publicPath: './',
  publicPath: process.env.NODE_ENV === 'production' ? '/baby-game/' : '/',
  devServer: {
    open: true, // 是否自動彈出瀏覽器頁面
    host: 'localhost',
    // host: '192.168.0.60',
    port: '8080',
    https: false,
    hotOnly: false,
    proxy: {
      '/ugym': {
        target: 'https://bxv0o73da9.execute-api.ap-northeast-1.amazonaws.com', // 測試機接口域名
        ws: true, // 代理websockets
        secure: true, // 如果是 https 接口，需要配置這個??
        changeOrigin: true // 虛擬的站點需要更管origin //是否跨域
        // pathRewrite: {
        //   重寫路徑 比如'/api/aaa/ccc'重寫為'/aaa/ccc'
        //   '^/api': ''
        // }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        // 官方文件有提到prependData是v8 sass-loader的option，v9以後改叫additionalData
        additionalData: `@import "~@/assets/styles/myVariables"`
      }
    }
  },
  chainWebpack: (config) => {
    ['vue-modules', 'vue', 'normal-modules', 'normal'].forEach((match) => {
      config.module
        .rule('scss')
        .oneOf(match)
        .use('sass-loader')
        .tap((opt) => Object.assign(opt, { additionalData: `@import '~@/assets/styles/myVariables';` }));
    });
  }
};
