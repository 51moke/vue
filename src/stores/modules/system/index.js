import { api } from 'apibus'

export const namespaced = true

export const state = {

  routerList: [],
  Breadcrumb: null,
  allMune: [],
  num: []
}
export const getters = {
  allMune: state => state.allMune,
  /* num (state) {
    return state.num
  } */
  num: state => state.num
}
export const mutations = {
  getRouter (state, data) {
    // console.log('更新数据', data)
    state.routerList = data
  },
  getBreadcrumb (state, data) {
    state.Breadcrumb = data
  },
  setAllMune (state, data) {
    state.allMune = data
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
  },
  getAllMune (context, data) {
    return api.system.getAllMune()
      .then(res => {
        console.log('接口结果全部菜单', res)
        context.commit('setAllMune', res.payload)
        return res.payload
      })
  }

}
// export default {
//   state,
//   getters,
//   actions,
//   mutations
// }
