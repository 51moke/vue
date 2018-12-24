import Mock from 'mockjs'

const Random = Mock.Random
// Mock.setup({
//   timeout: '200-2000'
// })

Mock.mock('/demo', 'post', () => {
  let payload = []
  for (let i = 0; i < 10; i++) {
    let item = {
      id: Random.id(),
      age: Random.integer(18, 30),
      title: Random.csentence(8, 30),
      thumb: Random.dataImage('120x120', 'mock头像'),
      name: Random.cname(),
      date: Random.date() + ' ' + Random.time()
    }
    payload.push(item)
  }
  return {code: 0, payload}
})

let data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'payload|10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    age: Random.integer(18, 30),
    title: Random.csentence(8, 30),
    thumb: Random.dataImage('120x120', 'mock头像'),
    name: Random.cname(),
    date: Random.date() + ' ' + Random.time()
  }],
  code: 0
})

console.log('DDDDD', data)
// Mock.mock('/demo', 'post', () => data)

var template = {
  'key|1-10': '★'
}
let k = Mock.toJSONSchema(template)
console.log('k', k)
