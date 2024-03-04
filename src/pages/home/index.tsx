import { type FC, type PropsWithChildren } from 'react'
import { Text } from '@tarojs/components'

import Layout from '@/components/Layout'

import './index.scss'

const HomePage: FC<PropsWithChildren> = () => {
  return (
    <Layout>
      <Text>This is Home Page</Text>
    </Layout>
  )
}

export default HomePage
