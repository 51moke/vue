import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@pages/index'

Vue.use(Router)

let routerFiles = {
  '@app/index': () => import('@pages/index')
}
let p404 = () => import('@pages/p404')

let routerBuild = data => {
  return data.map(o => {
    // console.log('o>>', o)
    let component = routerFiles[o.component] || p404
    // console.log('component', component)
    o.component = component
    if (o.children) {
      o.children = routerBuild(o.children)
    }
    return o
  })
}

export let start = data => {
  console.log('路由数据', data)
  let routes = routerBuild(data)
  console.log('解析路由结果', routes)

  return new Router({
    routes
  })
}
