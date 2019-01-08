// import { api } from 'apibus'
export const namespaced = true
export const state = {
  isCollapse: !!sessionStorage.isCollapse
}
export const getters = {

}

export const mutations = {
  getIsCollapse (state, data) {
    state.isCollapse = !state.isCollapse
    sessionStorage.isCollapse = state.isCollapse ? 1 : ''
  }
}
export const actions = {
  changeIsCollapse (context) {
    context.commit('getIsCollapse')
  }

}
export default {
  state,
  getters,
  actions,
  mutations
}
