import { Register } from 'apibus'
import axios from 'axios'

@Register('tableData')
export default class tableData {
  getList (params) {
    return axios.post('/table', params)
      .then(res => {
        console.log('mock数据', res.data)
        return res.data
      })
  }
}
