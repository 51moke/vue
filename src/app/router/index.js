import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@pages/index'

Vue.use(Router)

// 路由配置
let routerFiles = {
  '@app/index': {
    name: 'Index',
    component: () => import('@pages/index')
  },
  '@app/news': {
    name: 'News',
    component: () => import('@pages/news')
  },
  /*  '@app/news/cn': {
    name: 'newcn',
    component: () => import('@pages/news/cn')
  }, */
  '@app/news/en': {
    name: 'En',
    component: () => import('@pages/news/en')
  },
  '@app/login': {
    name: 'login',
    path: '/login',
    component: () => import('@pages/login')
  },
  '@ui/dashBoard': {
    name: 'dashBoard',
    component: () => import('@ui/dashBoard')
  },

  '@page/systemDemo': {
    name: 'systemDemo',
    component: () => import('@pages/systemDemo')
  },
  '@page/systemDemo/table': {
    name: 'table',
    component: () => import('@pages/systemDemo/table')
  },
  '@page/systemMgt': {
    name: 'systemMgt',
    component: () => import('@pages/systemMgt')
  },
  '@page/systemMgt/mainMenu': {
    name: 'mainMenu',
    component: () => import('@pages/systemMgt/mainMenu')
  }

}

// 404页面配置
let p404 = {component: () => import('@pages/p404')}
// let login = {path: '/login', name: 'login', component: () => import('@pages/login')}
// 路由拼接
let routerBuild = data => {
  return data.map(o => {
    // console.log('o>>', o)
    let obj = routerFiles[o.component] || p404
    // console.log('component', component)
    o = {...o, ...obj}
    if (o.children) {
      o.children = routerBuild(o.children)
    }
    return o
  })
}

// 解析路由
export let start = data => {
  console.log('路由数据', data)
  let routes = routerBuild(data)
  console.log('解析路由结果', routes)
  routes.push({
    path: '*',
    name: p404.name,
    component: p404.component
  })
  return new Router({
    routes
  })
}
