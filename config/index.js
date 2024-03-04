import path from 'node:path'
import { defineConfig } from '@tarojs/cli'

const config = defineConfig({
  projectName: 'taro-starter',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_APP_BUILD_ENV}/${process.env.TARO_ENV}`,
  plugins: ['@tarojs/plugin-html', 'taro-plugin-compiler-optimization'],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'react',
  compiler: 'webpack5',
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  env: {
    TARO_APP_API_HOST: JSON.stringify(process.env.TARO_APP_API_HOST),
    TARO_APP_BUILD_ENV: JSON.stringify(process.env.TARO_APP_BUILD_ENV),
    TARO_APP_STATICS_DOMAIN: JSON.stringify(process.env.TARO_APP_STATICS_DOMAIN)
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src')
  },
  sass: {
    resource: path.resolve(__dirname, '..', 'src/_variables.scss')
  },
  mini: {
    optimizeMainPackage: {
      enable: true
    },
    miniCssExtractPluginOption: {
      ignoreOrder: true
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {}
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    webpackChain(chain) {
      chain.merge({
        performance: {
          hints: false
        }
      })
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {}
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
})

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
