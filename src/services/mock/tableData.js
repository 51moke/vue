import Mock from 'mockjs'

const Random = Mock.Random
// Mock.setup({
//   timeout: '200-2000'
// })

Mock.mock('/table', 'post', ({body}) => {
  let data = JSON.parse(body)
  console.log(data, 'mock！！！！！！！！！！！！！！！！！！！1')
  let total = 96
  let currentPage = data.page
  let pageSize = data.pageSize
  let totalPage = Math.ceil(total / pageSize)
  let itemList = []

  let number = pageSize
  if (currentPage === totalPage) {
    console.log('aaa', total, pageSize, total % pageSize)
    number = (total % pageSize) || number
  }

  for (let i = 0; i < number; i++) {
    let tableData = {
      date: Random.date(),
      name: Random.cname(),
      address: Random.province() + Random.city()

    }
    itemList.push(tableData)
  }

  return {
    code: 0,
    payload: {
      itemList,
      totalPage, // 总页数
      pageSize, // 每页显示的条数
      currentPage, // 当前页
      total// 总条数
    }
  }
})
