import { type FC } from 'react'
import { Text, View } from '@tarojs/components'

import styles from './index.module.scss'

const Header: FC = () => {
  return (
    <View className={styles.header}>
      <Text className={styles.brand}>Title</Text>
    </View>
  )
}

export default Header
