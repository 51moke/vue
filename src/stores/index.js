import './vuex'
import Vuex from 'vuex'
import modules from './modules'
let strict = process.env.NODE_ENV !== 'production'
console.log('strict', strict)
export default new Vuex.Store({
  strict,
  modules: {
    ...modules
  }
})
