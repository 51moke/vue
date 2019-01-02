// import {G} from 'apibus'
import Default from './default.vue'
// import main1 from './main1.vue'
// import noFooter from './noFooter.vue'
// let layout = {main1, noFooter, default: Default}
// console.log('GGGGGGGGGG', G.layout)
// let name = G.layout.main
export default () => {
  return Default// layout[name] || Default
}
