import Taro from '@tarojs/taro'

export const setStorageItem = async (key: string, value: string) => {
  try {
    return await Taro.setStorage({ key, data: value })
  } catch (error) {
    console.warn(error)
  }
}

export const getStorageItem = async (key: string) => {
  try {
    return await Taro.getStorage({ key })
  } catch (error) {
    console.warn(error)
    return null
  }
}

export const removeStorageItem = async (key: string) => {
  try {
    return await Taro.removeStorage({ key })
  } catch (error) {
    console.warn(error)
  }
}
