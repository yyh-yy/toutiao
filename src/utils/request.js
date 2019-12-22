import axios from 'axios'
import { Message } from 'element-ui'
import router from '../router'
// import router from '../router'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
axios.interceptors.request.use(function (config) {
  let token = window.localStorage.getItem('user-token')
  config.headers['Authorization'] = `Bearer ${token}`
  return config
}, function (error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  return response.data ? response.data : {}
}, function (error) {
  let status = error.response.status
  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '403 refresh_token未携带或已过期'
      break
    case 507:
      message = '服务器异常'
      break
    case 401:
      message = 'token过期或未出'
      window.localStorage.clear()
      router.push('./login')
      break
    case 404:
      message = '手机号或密码错误'
      break
    default:
      break
  }
  Message({ type: 'error', message })
  return new Promise(function () {})
})

export default axios
