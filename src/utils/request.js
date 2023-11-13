import axios from 'axios'
import store from '@/store'
import { isCheckTimeout } from './auth'
import { ElMessage } from 'element-plus'
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在这个位置需要统一去注入 token
    if (store.getters.token) {
      if (isCheckTimeout()) {
        // 如果它为 true，表示 token 已经超时了
        // token 超时，强制跳转到登录页
        store.dispatch('user/logout')
        return Promise.reject(new Error('token 失效'))
      }
      // 如果 token 存在，就注入 token
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config // 必须返回配置
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const { code, msg } = response.data
    //   要根据 success 的成功与否决定下面的操作
    if (code === 200) {
      return response.data
    } else {
      // 业务错误
      ElMessage.error(msg) // 提示错误消息
      return Promise.reject(new Error(msg))
    }
  },
  (error) => {
    // 处理 token 超时问题
    if (error.response && error.response.data && error.response.data.code === 401) {
      // token 超时
      store.dispatch('user/logout')
    }
    // TODO: 将来处理 token 超时问题
    ElMessage.error(error.message) // 提示错误信息
    return Promise.reject(error)
  }
)

export default service
