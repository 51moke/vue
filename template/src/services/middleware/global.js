import apibus from 'apibus'

// 全局拦截
apibus.Res((p) => {
  return p.then(res => {
    if (res.code !== 0 && res.code !== '0') {
      return Promise.reject(res)
    }
    return res
  })
})

// 打接口被调用log
apibus.Req((promise, apiInfo) => {
  return promise.then(res => {
    // console.log('exec-> api name:', apiInfo.name, ' value:', res)
    return res
  })
})
// 打接口返回值log
apibus.Res((promise, apiInfo) => {
  return promise.then(res => {
    // console.log('res-> api name:', apiInfo.name, ' value:', res)
    return res
  })
})
