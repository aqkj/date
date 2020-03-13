/**
 * 入口文件
 */
type TTimeFormat = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'
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
  /**
   * 克隆一份ZQ时间对象
   */
  clone(): ZQDate {
    return ZDate(this.getTime())
  }
  /**
   * 获取时间戳
   */
  getTime(): number {
    return this.date.getTime()
  }
  /**
   * 时间减法
   * @param number 减去的数量
   * @param tFormat 时间类型 year,month,day,hour,minute,second
   */
  sub(number: number, tFormat: TTimeFormat): ZQDate {
    const newDate: ZQDate = this.clone()
    // 获取时间对象
    const date = newDate.date
    if (tFormat === 'day') { // 减去天
      date.setDate(date.getDate() - number)
    } else if (tFormat === 'hour') { // 减去小时
      date.setHours(date.getHours() - number)
    } else if (tFormat === 'minute') { // 分钟
      date.setMinutes(date.getMinutes() - number)
    } else if (tFormat === 'month') { // 月
      date.setMonth(date.getMonth() - number)
    } else if (tFormat === 'second') { // 秒
      date.setSeconds(date.getSeconds() - number)
    } else if (tFormat === 'year') {
      date.setFullYear(date.getFullYear() - number)
    }
    return newDate
  }
  /**
   * 时间加法
   * @param number 加上的数量
   * @param tFormat 时间类型 year,month,day,hour,minute,second
   */
  add(number: number, tFormat: TTimeFormat): ZQDate {
    const newDate: ZQDate = this.clone()
    // 获取时间对象
    const date = newDate.date
    if (tFormat === 'day') { // 减去天
      date.setDate(date.getDate() + number)
    } else if (tFormat === 'hour') { // 减去小时
      date.setHours(date.getHours() + number)
    } else if (tFormat === 'minute') { // 分钟
      date.setMinutes(date.getMinutes() + number)
    } else if (tFormat === 'month') { // 月
      date.setMonth(date.getMonth() + number)
    } else if (tFormat === 'second') { // 秒
      date.setSeconds(date.getSeconds() + number)
    } else if (tFormat === 'year') {
      date.setFullYear(date.getFullYear() + number)
    }
    return newDate
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
  date = date instanceof Date ? date : new Date(typeof date === 'number' ? date : date.toString())
  // 如果日期格式错误则
  if (date.toString() === 'Invalid Date') {
    console.error('日期格式错误')
  } else {
    return new ZQDate(date)
  }
}