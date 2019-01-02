import Mock from 'mockjs'
const Random = Mock.Random

Mock.mock('/getlayout', 'post', () => {
  // console.log('mmmmmmmmmmmmmm')
  return {
    code: 0,
    payload: {
      main: 'main' + Random.integer(1, 3),
      index: 'aaa',
      news: ''
    }
  }
})
