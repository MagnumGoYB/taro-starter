import { type FC, type PropsWithChildren } from 'react'
import { Text } from '@tarojs/components'

import Layout from '@/components/Layout'

import './index.scss'

const MessagePage: FC<PropsWithChildren> = () => {
  return (
    <Layout>
      <Text>This is Message Page</Text>
    </Layout>
  )
}

export default MessagePage
