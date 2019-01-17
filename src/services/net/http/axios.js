import axios from 'axios'

let baseUrl = ''

let http = (apiname, data, config = {}) => {
  let obj = {
    method: 'get',
    url: baseUrl + apiname,
    data
  }

  let _prams = {...obj, ...config}

  return axios(_prams)
    .then(res => {
      if (res.status === 200) {
        return res.data
      }
      let err = {code: 1, data: res}
      return Promise.reject(err)
    })
}

// http.request(config)
// http.head(url[, config])

let ajax = (url, config = {}, method) => {
  return http(url, null, {...config, method})// (url[, config])
}
let ajax2 = (url, data, config = {}, method) => {
  return http(url, data, {...config, method})// (url[, config])
}

http.get = (url, config) => {
  return ajax(url, config, 'get')// (url[, config])
}
http.delete = (url, config) => {
  return ajax(url, config, 'delete')// (url[, config])
}

http.options = (url, config) => {
  return ajax(url, config, 'options')// (url[, config])
}
http.post = (url, data, config) => {
  return ajax2(url, data, config, 'post')// (url[,data[, config])
}
http.put = (url, data, config) => {
  return ajax2(url, data, config, 'put')// (url[,data[,  config])
}
http.patch = (url, data, config) => {
  return ajax2(url, data, config, 'patch')// (url[,data[,  config])
}

export default http
