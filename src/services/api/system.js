import { Register } from 'apibus'
import http from '@http'
import prefix from './proxy'
// import layout from @app/page/index'

/* export const routes = (obj) => http.get(`/${prefix}/getMenu`, {
  params: obj
}) */
@Register('system')
export default class routes {
  // 获取路由
  getRouters () {
    return http.get(`${prefix}/getMenu`).then(res => {
      res.payload = [{
        path: '/',
        component: '@app/index',
        redirect: 'dashboard',
        meta: { title: '首页' },
        children: [...res.payload]

      },
      {
        path: '/login',
        component: '@app/login',
        children: []

      }

      ]
      console.log(res, 'bbbbbbb')
      return res
    })

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

    /* return {
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
              meta: { title: '用户工作台', icon: 'fa-desktop' }
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
                  children: [
                  ]
                }
              ]

            },
            {
              path: '/systemDemo2',
              component: '@page/systemDemo2',
              meta: { title: '系统示例2', icon: 'fa-th-large' },
              children: [
                {
                  path: '/systemDemo/table2',
                  component: '@page/systemDemo/table2',
                  meta: { title: '表格示例2' },
                  children: [
                    {
                      path: '/a2/b2/c1',
                      component: '@app/news/cn',
                      children: [],
                      meta: { title: '三级页面' }
                    }
                  ]
                },
                {
                  path: '/systemDemo/table21',
                  component: '@page/systemDemo/table21',
                  meta: { title: '表格示例21' },
                  children: [
                    {
                      path: '/a2/b2/c11',
                      component: '@app/news/cn2',
                      children: [],
                      meta: { title: '三级页面' }
                    }
                  ]
                },
                {
                  path: '/systemDemo/table3',
                  component: '@page/systemDemo/table3',
                  meta: { title: '表格示例3' },
                  children: [
                    {
                      path: '/a2/b2/c13',
                      component: '@app/news/cn3',
                      children: [],
                      meta: { title: '三级页面' }
                    }
                  ]
                }
              ]

            }
          ],
          meta: { title: '导航' }
        }
      ]
    } */
  }

  getLayout () {
    return http.post('/getlayout')
      .then(res => {
        console.log(res)
        return res
      })
  }
}

// api.system.getRouters()
