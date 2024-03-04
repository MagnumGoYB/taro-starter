import Taro from '@tarojs/taro'
import classnames from 'classnames'
import { Image, View } from '@tarojs/components'

import styles from './index.module.scss'
import { TabBarList, type TabBarItem, useTabBarStore } from './utils'

const CustomTabBar = () => {
  const { currentKey, select } = useTabBarStore()

  const onSwitch = (item: TabBarItem) => {
    select(item.key)
    void Taro.switchTab({ url: item.pagePath })
  }

  return (
    <View className={styles['tab-bar']}>
      {TabBarList.map((item, index) => {
        return (
          <View
            key={index}
            className={classnames(styles.item, styles[item.key])}
            onClick={() => {
              onSwitch(item)
            }}
          >
            <View className={styles.icon}>
              <Image
                mode="aspectFit"
                className={styles['icon-image']}
                src={
                  currentKey === item.key
                    ? item.selectedIconPath
                    : item.iconPath
                }
              />
            </View>
            <View
              className={classnames(styles.title, {
                [styles.active]: currentKey === item.key
              })}
            >
              {item.text}
            </View>
          </View>
        )
      })}
    </View>
  )
}

export default CustomTabBar
