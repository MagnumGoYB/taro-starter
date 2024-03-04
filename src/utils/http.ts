import Taro from '@tarojs/taro'
import { isDefined } from 'class-validator'

import { ApiHost, AuthProviderTokenKey } from './constant'
import { getStorageItem } from './storage'

export interface ErrorResponse {
  code?: number
  error?: string
  messages?: Array<{ field: string; message: string }>
}

export interface RequestMethod extends Taro.request.Method {
  PATCH
}

const { logInterceptor, timeoutInterceptor } = Taro.interceptors

Taro.addInterceptor(logInterceptor)
Taro.addInterceptor(timeoutInterceptor)

Taro.addInterceptor(async (chain) => {
  const requestParams = chain.requestParams
  const token = await getStorageItem(AuthProviderTokenKey)
  if (isDefined(token)) {
    requestParams.header = {
      ...requestParams.header,
      Authorization: `Bearer ${token.data}`
    }
  }
  return chain.proceed(requestParams)
})

const http = async <T>(
  method: keyof RequestMethod,
  url: Taro.request.Option['url'],
  data?: Taro.request.Option['data']
) => {
  const headers = {}
  if (method === 'PATCH') {
    headers['X-HTTP-Method-Override'] = 'PATCH'
  }

  const result = await Taro.request<T | ErrorResponse>({
    method: method === 'PATCH' ? 'POST' : method,
    url: `${ApiHost}${url}`,
    header: { ...headers },
    credentials: 'same-origin',
    data
  })

  return result
}

export default http
