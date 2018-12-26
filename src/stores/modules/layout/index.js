// import { api } from 'apibus'

export const namespaced = true
export const state = {
  isCollapse: false
}

export const getters = {

}

export const mutations = {
  getIsCollapse (state, data) {
    state.isCollapse = !state.isCollapse
  }

}

export const actions = {
  changeIsCollapse (context) {
    context.commit('getIsCollapse')
  }

}
