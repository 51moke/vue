import {G} from 'apibus'
import Default from './default.vue'
import main1 from './main1.vue'
import main2 from './main2.vue'
let layout = {main1, main2, default: Default}
// console.log('GGGGGGGGGG', G.layout)
let name = G.layout.main
export default () => {
  return layout[name] || Default
}
