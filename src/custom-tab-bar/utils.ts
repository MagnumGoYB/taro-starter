import { type TabBarItem as TaroTabBarItem } from '@tarojs/taro'
import { create } from 'zustand'
import { isDefined } from 'class-validator'

import HomeActiveIcon from './icons/icon_home_active.png'
import HomeIcon from './icons/icon_home.png'
import MessageActiveIcon from './icons/icon_messages_active.png'
import MessageIcon from './icons/icon_messages.png'
import MineActiveIcon from './icons/icon_mine_active.png'
import MineIcon from './icons/icon_mine.png'

export type TabBarKeys = 'home' | 'message' | 'mine'
export type TabBarItem = Required<TaroTabBarItem> & { key: TabBarKeys }
export const TabBarList: TabBarItem[] = [
  {
    key: 'home',
    pagePath: '/pages/home/index',
    text: '首页',
    iconPath: HomeIcon,
    selectedIconPath: HomeActiveIcon
  },
  {
    key: 'message',
    pagePath: '/pages/message/index',
    text: '消息',
    iconPath: MessageIcon,
    selectedIconPath: MessageActiveIcon
  },
  {
    key: 'mine',
    pagePath: '/pages/mine/index',
    text: '我的',
    iconPath: MineIcon,
    selectedIconPath: MineActiveIcon
  }
] as const

export interface TabBarStore {
  currentKey: TabBarKeys
  currentItem: TabBarItem & { key: TabBarKeys }
  select: (key: TabBarKeys) => void
}

const defaultItem = TabBarList[0]

export const useTabBarStore = create<TabBarStore>()((set) => ({
  currentItem: defaultItem,
  currentKey: defaultItem.key,
  select: (key) => {
    const item = TabBarList.find((it) => it.key === key)
    if (!isDefined(item)) {
      throw new Error(`key: ${key} not found in TabBarList`)
    }
    set({ currentItem: item, currentKey: key })
  }
}))
