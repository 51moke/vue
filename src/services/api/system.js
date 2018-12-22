import { Register } from 'apibus'
// import axios from 'axios'

@Register('system')
export default class routes {
  // 获取路由
  getRouters () {
    return {
      code: 0,
      payload: [
        {
          path: '/',
          name: 'Index',
          title: '主页',
          component: '@app/index',
          children: []
        },
        {
          path: '/new',
          name: 'News',
          title: '新闻',
          component: '@app/news',
          children: [
            {
              path: '/cn',
              name: 'Cn',
              title: '国内新闻',
              component: '@app/news/cn',
              children: []
            },
            {
              path: '/en',
              name: 'En',
              title: '国际新闻',
              component: '@app/news/en',
              children: []
            }
          ]
        }
      ]
    }
  }
}

// api.system.getRouters()
