import request from '@/utils/request'

/**
 * 登录
 */
export const login = (data) => {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}

/**
 * 获取用户信息
 */
export const getUserInfo = () => {
  return request({
    url: '/system/user/profile'
  })
}

/**
 * 获取用户列表数据
 */
export const getUserManageList = (data) => {
  return request({
    url: '/system/user/list',
    params: data
  })
}
