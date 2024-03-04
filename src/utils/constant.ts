import Taro from '@tarojs/taro'

import pkg from '../../package.json'

export const AppVersion = pkg.version

export const WeappEnv = {
  develop: '开发版',
  trial: '体验版',
  release: '正式版'
} as const

export const TaroEnv = Taro.getEnv()
export const PageSize = 10
export const ApiHost = process.env.TARO_APP_API_HOST
export const BuildEnv = process.env.TARO_APP_BUILD_ENV
export const AuthProviderTokenKey = '__auth_provider_token__'
export const WeChatDefaultAvatar =
  'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
export const StaticsDomain = process.env.TARO_APP_STATICS_DOMAIN
