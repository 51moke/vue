import { api } from 'apibus'

export const namespaced = true

export const state = {
  userInfo: {
    tableData: [],
    currentPage: 1,
    pageSize: 0,
    totalPage: 0
  }

}

export const getters = {

}

export const mutations = {
  getList (state, data) {
    state.userInfo = data
  }
}

export const actions = {
  getList (context, params) {
    // console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
    return api.tableData.getList(params).then(res => {
      // console.log(params, 'params')
      context.commit('getList', res.payload)
      return res
    })
  }
}
