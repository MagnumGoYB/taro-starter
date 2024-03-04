export default defineAppConfig({
  __usePrivacyCheck__: true,
  lazyCodeLoading: 'requiredComponents',
  tabBar: {
    custom: true,
    backgroundColor: '#fff',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页'
      },
      {
        pagePath: 'pages/message/index',
        text: '消息'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的'
      }
    ]
  },
  pages: ['pages/home/index', 'pages/message/index', 'pages/mine/index'],
  window: {
    navigationStyle: 'custom',
    backgroundColor: '#fff'
  }
})
