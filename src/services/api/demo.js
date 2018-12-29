import { Register } from 'apibus'
import axios from 'axios'

@Register('demo')
export default class demo {
  getList () {
    return axios.post('/demo')
      .then(res => {
        // console.log('mock数据', res.data)
        return res.data
      })
    // let data = {
    //   code: 0,
    //   payload: [
    //     {
    //       id: 1,
    //       name: '张三',
    //       age: 20
    //     },
    //     {
    //       id: 2,
    //       name: '李四',
    //       age: 30
    //     },
    //     {
    //       id: 3,
    //       name: '王五',
    //       age: 40
    //     },
    //     {
    //       id: 4,
    //       name: '超六',
    //       age: 50
    //     }
    //   ]
    // }

    // // 模拟接口2秒返回
    // return new Promise(resolve => {
    //   setTimeout(() => {
    //     resolve(data)
    //   }, 2000)
    // })
  }
}
