
import Mock from 'mockjs'
import prefix from '../api/proxy'
Mock.mock(`${prefix}/getMenu`, 'get', () => {
  return {
    code: 0,
    payload: [
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
    ]
  }
})
