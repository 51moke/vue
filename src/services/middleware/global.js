import apibus from 'apibus'

// 全局拦截
apibus.Res((p) => {
  return p.then(res => {
    if (res.code !== 0) {
      return Promise.reject(res)
    }
    return res
  })
})
