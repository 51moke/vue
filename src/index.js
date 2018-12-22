import './services'
import { api } from 'apibus'

api.system.getRouters().then(res => {
  console.log('获取路由结果', res)
  let routerData = res.payload
  Promise.all([import('@/app/router'), import('@/main')])
    .then(([appRouter, main]) => {
      console.log('文件结果', appRouter, main)
      let routers = appRouter.start(routerData)
      console.log('配置路由', routers)
      main.start(routers)
    })
})
