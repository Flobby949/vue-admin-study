const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack(config) {
    // 设置 svg-sprite-loader
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  configureWebpack() {
    return {
      resolve: {
        alias: {
          '@': resolve('src')
        },
        fallback: {
          path: require.resolve('path-browserify')
        }
      }
    }
  },
  // 代理
  devServer: {
    proxy: {
      '/mock/article/sort': {
        target: 'http://127.0.0.1:4523/m1/3590846-0-default/api',
        changeOrigin: true,
        pathRewrite: {
          '^/mock/article/sort': '/article/sort'
        }
      }
    }
  }
})
