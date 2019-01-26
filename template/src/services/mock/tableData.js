import Mock from 'mockjs'

const Random = Mock.Random
// Mock.setup({
//   timeout: '200-2000'
// })

Mock.mock('/table', 'post', ({body}) => {
  // let data = JSON.parse(body)
  // // console.log(data, 'mock！！！！！！！！！！！！！！！！！！！1')
  let total = 96
  let pageNum = 1
  let pageSize = 10
  // let totalPage = Math.ceil(total / pageSize)
  let itemList = []

  // let number = pageSize
  // if (currentPage === totalPage) {
  //   // console.log('aaa', total, pageSize, total % pageSize)
  //   number = (total % pageSize) || number
  // }

  for (let i = 0; i < 4; i++) {
    let tableData = {
      date: Random.date(),
      name: Random.cname(),
      address: Random.province() + Random.city()

    }
    itemList.push(tableData)
  }
  let res = {
    code: 0,
    payload: {
      itemList,
      pageNum, // 总页数
      pageSize, // 每页显示的条数
      total// 总条数
    }
  }
  console.log('>>>>>>>>ceshi res', res)
  return res
})
