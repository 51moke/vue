export const namespaced = true

export const state = {
  title: '用户列表',
  itemList: [
    {
      id: 1,
      name: '张三',
      age: 20
    },
    {
      id: 2,
      name: '李四',
      age: 30
    },
    {
      id: 3,
      name: '王五',
      age: 40
    },
    {
      id: 4,
      name: '超六',
      age: 50
    }
  ],
  item: null
}

export const getters = {
  Age30 (state) {
    return state.itemList.filter(o => o.age > 30)
  }
}

export const mutations = {
  getById (state, id) {
    state.item = state.itemList.filter(o => o.id === id)[0]
  }
}

export const actions = {
  getById (context, id) {
    // console.log(context, "context", id);
    // return context.state.itemList.filter(o => o.id == id)[0];
    context.commit('getById', id)
  }
}
