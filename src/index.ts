/**
 * 入口文件
 */
class ZQDate {
  constructor(public date: Date) {
  }
  /**
   * 格式化日期时间
   * @param {string} format 格式
   */
  format(format: string = 'YYYY-MM-DD'): string {
    const date = this.date
    const formatObj = {
      // 年
      'Y+': date.getFullYear(),
      // 月 默认0开始，需要+1
      'M+': date.getMonth() + 1,
      // 日
      'D+': date.getDate(),
      // 小时
      'H+': date.getHours(),
      // 分钟
      'm+': date.getMinutes(),
      // 秒
      's+': date.getSeconds(),
      // 毫秒
      'S+': date.getMilliseconds()
    }
    Object.keys(formatObj).forEach(key => {
      const reg: RegExp = new RegExp(key)
      format = format.replace(reg, (a, b) => {
        let value: string = String((formatObj as any)[key])
        if (key !== 'Y+' && key !== 'S+') {
          value = `${value.length < 2 && a.length >= 2 ? 0 : ''}${value.slice(-a.length)}`
        } else if (key === 'Y+') {
          value = value.slice(-a.length)
        } else if (key === 'S+') {
          value = value.slice(0, a.length)
        }
        return value
      })
    })
    return format
  }
}
/**
 * 通过当前时间创建Date对象
 */
export function ZDate(): ZQDate
/**
 * 通过时间戳创建Date对象
 */
export function ZDate(date: number): ZQDate
/**
 * 通过字符串创建Date对象
 */
export function ZDate(date: string): ZQDate
export function ZDate(date?: Date | string | number): ZQDate | undefined {
  // 如果为date则返回date
  date = date ? date : new Date()
  if (typeof date === 'string') {
    date = date.replace(/\-/g, '/')
  }
  date = date instanceof Date ? date : new Date(date.toString())
  // 如果日期格式错误则
  if (date.toString() === 'Invalid Date') {
    console.error('日期格式错误')
  } else {
    return new ZQDate(date)
  }
}