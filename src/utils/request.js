import axios from 'axios'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

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
    // TODO: 将来处理 token 超时问题
    ElMessage.error(error.message) // 提示错误信息
    return Promise.reject(error)
  }
)

export default service
