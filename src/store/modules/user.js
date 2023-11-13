import { login } from '@/api/system'
export default {
  namespaced: true,
  state: () => ({}),
  mutations: {},
  actions: {
    login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password
        })
          .then((data) => {
            console.log(data.data)
            resolve(data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
