import { Register } from 'apibus'
import http from '@http'

@Register('tableData')
export default class tableData {
  getList (params) {
    console.log(',,,,,', params)
    return http.post('/table', params)
      .then(res => {
        console.log('mock数据', res)
        return res
      })
  }
}
