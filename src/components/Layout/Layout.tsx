import Taro from '@tarojs/taro'
import classNames from 'classnames'
import { type FC, type PropsWithChildren } from 'react'
import { View } from '@tarojs/components'

import Header from './Header'
import styles from './Layout.module.scss'

export interface LayoutProps extends PropsWithChildren {
  hideHeader?: boolean
}

const Layout: FC<LayoutProps> = (props) => {
  const { children, hideHeader = false } = props
  return (
    <View
      className={classNames(styles.layout, {
        [styles['layout-hide-header']]: hideHeader
      })}
      style={`--status-bar-height: ${
        Taro.getWindowInfo().statusBarHeight ?? 0
      }px`}
    >
      {!hideHeader && <Header />}
      {children}
    </View>
  )
}

export default Layout
