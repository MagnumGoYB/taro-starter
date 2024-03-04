import { type FC, type PropsWithChildren } from 'react'
import { Text } from '@tarojs/components'

import Layout from '@/components/Layout'

import './index.scss'

const AiChatPage: FC<PropsWithChildren> = () => {
  return (
    <Layout>
      <Text>AiChatPage</Text>
    </Layout>
  )
}

export default AiChatPage
