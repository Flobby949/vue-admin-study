import dayjs from 'dayjs'

// 把时间格式化为 YYYY-MM-DD HH:mm:ss 格式
const dateFilter = (val, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (!isNaN(val)) {
    val = parseInt(val)
  }

  return dayjs(val).format(format)
}

export default (app) => {
  app.config.globalProperties.$filters = {
    dateFilter
  }
}
