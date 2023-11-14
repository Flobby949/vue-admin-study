import dayjs from 'dayjs'
export const dateFormat = (val, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (isNaN(val)) {
    return val
  }
  val = parseInt(val)
  return dayjs(val).format(format)
}
