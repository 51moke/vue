import { Register } from 'apibus'
import axios from 'axios'

@Register('system')
export default class routes {
  // 获取路由
  getRouters () {
    return {
      code: 0,
      payload: [
        {
          path: '/',
          component: '@app/index',
          children: [],
          meta: { title: 'guide' }
        },
        {
          path: '/news',
          component: '@app/news',
          children: [
            {
              path: 'cn',
              component: '@app/news/cn',
              children: []
            },
            {
              path: 'en',
              component: '@app/news/en',
              children: []
            }
          ]
        },
        {
          path: '/login',
          component: '@app/login',
          children: [],
          meta: { title: 'login' }
        }
      ]
    }
  }

  getLayout () {
    return axios.post('/getlayout')
      .then(res => {
        return res.data
      })
  }
}

// api.system.getRouters()
