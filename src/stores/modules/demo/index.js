import { api } from 'apibus'

export const namespaced = true

export const state = {
  title: '用户列表',
  itemList: [],
  item: null
}

export const getters = {
  Age30 (state) {
    return state.itemList.filter(o => o.age > 30)
  }
}

export const mutations = {
  getList (state, data) {
    // console.log('更新数据', data)
    state.itemList = data
  },
  getById (state, id) {
    state.item = state.itemList.filter(o => o.id === id)[0]
  }
}

export const actions = {
  getList (context) {
    return api.demo.getList()
      .then(res => {
      // console.log('接口结果', res)
        context.commit('getList', res.payload)
        return res
      })
  },
  getById (context, id) {
    // console.log(context, "context", id);
    // return context.state.itemList.filter(o => o.id == id)[0];
    context.commit('getById', id)
  }
}
