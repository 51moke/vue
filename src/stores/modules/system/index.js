import { api } from 'apibus'

export const namespaced = true

export const state = {

  routerList: [],
  Breadcrumb: null

}

export const getters = {

}

export const mutations = {
  getRouter (state, data) {
    // console.log('更新数据', data)
    state.routerList = data
  },
  getBreadcrumb (state, data) {
    state.Breadcrumb = data
  }
}

export const actions = {
  getList (context) {
    return api.system.getRouters()
      .then(res => {
        console.log('接口结果', res)
        context.commit('getRouter', res.payload)
        return res.payload
      })
  },
  getBreadcrumb (context, data) {
    context.commit('getBreadcrumb', data)
    console.log(data, 'data')
  }

}
