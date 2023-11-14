import axios from 'axios'
/**
 * 修改排序
 */
export const articleSort = (data) => {
  return axios({
    url: 'http://127.0.0.1:4523/m1/3590846-0-default/api/article/sort',
    method: 'POST',
    data
  })
}
