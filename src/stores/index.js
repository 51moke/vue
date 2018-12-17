import './vuex'
import Vuex from 'vuex'
import modules from './modules'

export default new Vuex.Store({
  modules: {
    ...modules
  }
})
