import Mock from 'mockjs'
const Random = Mock.Random

Mock.mock('/getlayout', 'post', () => {
  return {
    code: 0,
    payload: {
      main: 'main' + Random.integer(1, 3),
      index: 'aaa',
      news: ''
    }
  }
})
