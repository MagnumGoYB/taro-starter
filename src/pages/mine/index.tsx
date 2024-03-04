import { type FC, type PropsWithChildren } from 'react'
import { Text } from '@tarojs/components'

import Layout from '@/components/Layout'

import './index.scss'

const MinePage: FC<PropsWithChildren> = () => {
  return (
    <Layout hideHeader>
      <Text>MinePage</Text>
    </Layout>
  )
}

export default MinePage
