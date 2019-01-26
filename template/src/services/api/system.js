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
    return http.get(`${prefix}/getMenuList`).then(res => {
      console.log(res, '///////////////路由')
      res.result = [{
        path: '/',
        component: '@app/index',
        // redirect: 'dashboard',
        menuId: '1001',
        meta: { title: '首页' },
        children: [...res.result]

      },
      {
        path: '/login',
        component: '@app/login',
        children: [],
        menuId: '1002'

      }

      ]
      console.log(res, 'bbbbbbb')
      return res
    })
  }
  getAllMune () {
    return http.get(`${prefix}/getAllMenu`).then(res => {
      // res.payload = [{
      //   path: '/',
      //   component: '@app/index',
      //   redirect: 'dashboard',
      //   meta: { title: '导航' },
      //   children: [...res.payload]
      // }]
      console.log(res, 'zhende')
      return res
    })
  }
  getLayout () {
    return http.post('/getlayout')
      .then(res => {
        console.log(res)
        return res
      })
  }
  // 获取菜单
  getMenu () {
    return http.get(`${prefix}/getMenu`, {}).then(res => {
      return res
    })
  }
  // 创建菜单
  createMenu () {
    return http.post(`${prefix}/createMenu`, {}).then(res => {
      return res
    })
  }
  // 删除菜单
  deleteMenu () {
    return http.delete(`${prefix}/deleteMenu`, {}).then(res => {
      return res
    })
  }
  // 更新菜单
  updateMenu () {
    return http.put(`${prefix}/updateMenu `, {}).then(res => {
      return res
    })
  }
}

// api.system.getRouters()
