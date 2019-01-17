
import Mock from 'mockjs'
import prefix from '../api/proxy'
Mock.mock(`${prefix}/getMenuList`, 'get', () => {
  return {
    code: 0,
    result: [
      {
        path: '/dashBoard',
        component: '@ui/dashBoard',
        children: [],
        meta: { title: '用户工作台', icon: 'fa-desktop' },
        menuId: '100101'
      },
      {
        path: '/systemMgt',
        component: '@page/systemMgt',
        meta: { title: '系统管理', icon: 'fa-book' },
        menuId: '100201',
        children: [
          {
            path: '/systemMgt/mainMenu',
            component: '@page/systemMgt/mainMenu',
            meta: { title: '主菜单配置' },
            menuId: '10020101',
            parentId: '100201',
            children: []

          }
        ]

      },
      {
        path: '/systemDemo',
        component: '@page/systemDemo',
        redirect: '/systemDemo/index',
        meta: { title: '系统示例', icon: 'fa-th-large' },
        menuId: '100301',
        children: [
          {
            path: '/systemDemo/table',
            component: '@page/systemDemo/table',
            meta: { title: '表格示例' },
            menuId: '10030101',
            parentId: '100301',
            children: [
            ]
          }
        ]

      },
      {
        path: '/systemDemo2',
        component: '@page/systemDemo2',
        meta: { title: '系统示例2', icon: 'fa-th-large' },
        menuId: '100401',
        children: [
          {
            path: '/2',
            component: '@page/systemDemo/table2',
            meta: { title: '表格示例2' },
            menuId: '10040101',
            parentId: '100401',
            children: [
              {
                path: '/a2/b2/c1',
                component: '@app/news/cn',
                menuId: '1004010101',
                parentId: '10040101',
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
                menuId: '1004010102',
                parentId: '10040101',
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
Mock.mock(`${prefix}/getAllMenu`, 'get', () => {
  return {
    code: 0,
    payload: [
      {
        id: 1,
        label: 'mock测试',
        children: [{
          id: 4,
          label: '主菜单管理'
        }, {
          id: 5,
          label: '主菜单管理22'
        }]
      },
      {
        id: 2,
        label: 'mock测试22',
        children: [{
          id: 4,
          label: '主菜单管理'
        }]
      }
    ]
  }
})
// 获取菜单mock
Mock.mock(`${prefix}/getMenu`, 'get', () => {
  let res = {
    'code': 0,
    'message': '获取菜单成功',
    'result': {
      menuId: '',
      parentMenuId: '',
      menuName: '',
      sortno: '',
      requestUrl: '',
      requestParams: '',
      munuIcon: '',
      menuState: '',
      createOrg: '',
      createUser: '',
      createDate: '',
      updateOrg: '',
      updateUser: '',
      updateDate: '',
      menuRemark: '',
      menuComponents: ''
    }
  }

  return res
})
// 创建菜单mock
Mock.mock(`${prefix}/createMenu`, 'post', () => {
  let res = {
    'code': 0,
    'message': '创建菜单成功'
  }

  return res
})
// 删除菜单mock
Mock.mock(`${prefix}/deleteMenu`, 'delete', () => {
  let res = {
    'code': 0,
    'message': '删除菜单成功'
  }

  return res
})
// 更新菜单mock
Mock.mock(`${prefix}/updateMenu`, 'put', () => {
  let res = {
    'code': 0,
    'message': '更新菜单成功'
  }

  return res
})
