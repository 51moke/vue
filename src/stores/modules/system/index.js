import { api } from 'apibus'

export const namespaced = true

export const state = {

  routerList: [],
  Breadcrumb: null,
  allMune: [],
  num: [],
  FormData: {
    sortNum: '',
    name: '',
    URL: '',

    radioInfo: {
      status: 1,
      labels: ['锁定', '正常', '停用']
    },
    icon: '',
    desc: '',
    regInfo: {
      name: 'admin',
      org: '',
      date: ''
    },
    updateInfo: {
      name: '',
      org: '',
      date: ''
    }

  },
  fontIcon: [
    {
      title: '网页',
      icons: ['address-book', 'address-book-o', 'address-card', 'address-card-o']
    },
    {
      title: '网页2',
      icons: ['address-book', 'address-book-o', 'address-card', 'address-card-o']
    },
    {
      title: '网页3',
      icons: ['address-book', 'address-book-o', 'address-card', 'address-card-o']
    },
    {
      title: '网页4',
      icons: ['address-book', 'address-book-o', 'address-card', 'address-card-o']
    },
    {
      title: '网页5',
      icons: ['address-book', 'address-book-o', 'address-card', 'address-card-o']
    }

  ]
}
export const getters = {
  allMune: state => state.allMune,
  /* num (state) {
    return state.num
  } */
  num: state => state.num,
  FormData: state => state.FormData,
  fontIcon: state => state.fontIcon
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
  },
  getitemInfo (state, data) {
    state.FormData.sortNum = data.id
    state.FormData.name = data.label
    console.log(data.label, 'data', state.FormData)
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
