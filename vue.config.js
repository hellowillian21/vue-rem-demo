const pxtorem = require('postcss-pxtorem')

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          pxtorem({
            rootValue: 75,
            propList: ['*'],
            minPixelValue: 2 // （数字）设置要替换的最小像素值 解决 1px 问题
          })
        ]
      }
    }
  }
}