import { Register } from 'apibus'
import axios from 'axios'
// import layout from @app/page/index'
@Register('system')

export default class routes {
  // 获取路由
  getRouters () {
    let data = axios.get('v1/getMenu').then(res => {
      res.data.payload = [{
        path: '/',
        component: '@app/index',
        redirect: 'one',
        meta: { title: '导航' },
        children: [...res.data.payload]
      }]
      console.log(res.data, 'bbbbbbb')
      return res.data
    })
    console.log(data)
    /* {
      code: 0,
      payload: [
        {
          path: '/',
          component: '@app/index',
           redirect: 'dashboard',
          children: [
            {
              path: '/dashBoard',
              component: '@ui/dashBoard',
              children: [],
              meta: { title: '用户工作台', icon: 'fa-home' }
            },
            {
              path: '/systemMgt',
              component: '@page/systemMgt',
              meta: { title: '系统管理', icon: 'fa-book' },
              children: [
                {
                  path: '/systemMgt/mainMenu',
                  component: '@page/systemMgt/mainMenu',
                  meta: { title: '主菜单配置' },
                  children: []

                }
              ]

            },
            {
              path: '/systemDemo',
              component: '@page/systemDemo',
              meta: { title: '系统示例', icon: 'fa-th-large' },
              children: [
                {
                  path: '/systemDemo/table',
                  component: '@page/systemDemo/table',

                  meta: { title: '表格示例' },
                  children: []
                }
              ]

            },
            {
             path: '',
             component: '',
             children: [
               {
                 path: '',
                 component: '',
                 children: [],
                 meta: { title: '二级页面' }
               },
               {
                 path: '/a2/b2',
                 component: '@app/news/cn',
                 children: [
                   {
                     path: '/a2/b2/c1',
                     component: '@app/news/cn',
                     children: [],
                     meta: { title: '三级页面' }
                   }
                 ],
                 meta: { title: '二级目录' }
               }
             ],
             meta: { title: '一级' }
           }

          ],
          meta: { title: '导航' }
        }
      ]
    } */

    return {
      code: 0,
      payload: [
        {
          path: '/',
          component: '@app/index',
          redirect: 'dashboard',
          children: [
            {
              path: '/dashBoard',
              component: '@ui/dashBoard',
              children: [],
              meta: { title: '用户工作台', icon: 'fa-home' }
            },
            {
              path: '/systemMgt',
              component: '@page/systemMgt',
              meta: { title: '系统管理', icon: 'fa-book' },
              children: [
                {
                  path: '/systemMgt/mainMenu',
                  component: '@page/systemMgt/mainMenu',
                  meta: { title: '主菜单配置' },
                  children: []

                }
              ]

            },
            {
              path: '/systemDemo',
              component: '@page/systemDemo',
              meta: { title: '系统示例', icon: 'fa-th-large' },
              children: [
                {
                  path: '/systemDemo/table',
                  component: '@page/systemDemo/table',

                  meta: { title: '表格示例' },
                  children: []
                }
              ]

            }
            /* {
              path: '',
              component: '',
              children: [
                {
                  path: '',
                  component: '',
                  children: [],
                  meta: { title: '二级页面' }
                },
                {
                  path: '/a2/b2',
                  component: '@app/news/cn',
                  children: [
                    {
                      path: '/a2/b2/c1',
                      component: '@app/news/cn',
                      children: [],
                      meta: { title: '三级页面' }
                    }
                  ],
                  meta: { title: '二级目录' }
                }
              ],
              meta: { title: '一级' }
            } */

          ],
          meta: { title: '导航' }
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
