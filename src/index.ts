/**
 * 入口文件
 */
type TTimeFormat = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second'
class ZQDate {
  constructor(public $date: Date) {
  }
  /**
   * 格式化日期时间
   * @param {string} format 格式
   */
  format(format: string = 'YYYY-MM-DD'): string {
    const date = this.$date
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
    return this.$date.getTime()
  }
  /**
   * 时间减法
   * @param number 减去的数量
   * @param tFormat 时间类型 year,month,day,hour,minute,second
   */
  sub(number: number, tFormat: TTimeFormat): ZQDate {
    // 获取时间对象
    const date = this.$date
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
    return this
  }
  /**
   * 时间加法
   * @param number 加上的数量
   * @param tFormat 时间类型 year,month,day,hour,minute,second
   */
  add(number: number, tFormat: TTimeFormat): ZQDate {
    // 获取时间对象
    const date = this.$date
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
    return this
  }
  /**
   * 时间差
   * @param date 时间戳
   * @param format 格式化
   */
  diff(date: number, format?: TTimeFormat | 'week'): number
  /**
   * 时间差
   * @param date 时间字符串
   * @param format 格式化
   */
  diff(date: string, format?: TTimeFormat | 'week'): number
  /**
   * 时间差
   * @param date 时间Date对象
   * @param format 格式化
   */
  diff(date: Date, format?: TTimeFormat | 'week'): number
  /**
   * 时间差
   * @param date 时间ZQDate对象
   * @param format 格式化
   */
  diff(date: ZQDate, format?: TTimeFormat | 'week'): number
  /**
   * 计算时间差
   * @param date 
   */
  diff(date: number | string | Date | ZQDate, format?: TTimeFormat | 'week'): number {
    // 类型为字符串
    if (typeof date === 'string') date = new Date(date.replace(/\-/g, '/')).getTime()
    // 类型为时间对象
    else if (date instanceof Date || date instanceof ZQDate) date = date.getTime()
    let diffTime: number = this.getTime() - date
    // 判断是否存在format
    if (format) {
      if (format === 'day') { // 剩余天数
        diffTime = diffTime / (24 * 3600 * 1000)
      } else if (format === 'hour') { // 剩余小时
        diffTime = diffTime / (3600 * 1000)
      } else if (format === 'minute') { // 剩余分钟
        diffTime = diffTime / (60 * 1000)
      } else if (format === 'month') { // 剩余月
        diffTime = diffTime / (30 * 24 * 3600 * 1000)
      } else if (format === 'year') { // 剩余年
        diffTime = diffTime / (365 * 24 * 3600 * 1000)
      } else if (format === 'second') {
        diffTime = diffTime / 1000
      } else if (format === 'week') {
        diffTime = diffTime / (7 * 24 * 3600 * 1000)
      }
      return Math.round(diffTime * 100) / 100
    } else {
      // 返回时间戳时间差
      return diffTime
    }
  }
  /**
   * 获取小时数量
   * @param num 
   */
  hour(): number
  /**
   * 设置小时数量
   * @param num 
   */
  hour(num: number): ZQDate
  hour(num?: number): number | ZQDate {
    if (num !== undefined) {
      this.$date.setHours(num)
      return this
    }
    return this.$date.getHours()
  }
  /**
   * 获取分钟数
   * @param num 
   */
  minute(): number
  /**
   * 设置分钟数
   * @param num 
   */
  minute(num: number): ZQDate
  minute(num?: number): number | ZQDate {
    if (num !== undefined) {
      this.$date.setMinutes(num)
      return this
    }
    return this.$date.getMinutes()
  }
  /**
   * 获取秒数
   * @param num 
   */
  second(): number
  /**
   * 设置秒数
   * @param num 
   */
  second(num: number): ZQDate
  second(num?: number): number | ZQDate {
    if (num !== undefined) {
      this.$date.setSeconds(num)
      return this
    }
    return this.$date.getSeconds()
  }
  /**
   * 获取毫秒数
   * @param num 
   */
  millisecond(): number
  /**
   * 设置毫秒数
   * @param num 
   */
  millisecond(num: number): ZQDate
  millisecond(num?: number): number | ZQDate {
    if (num !== undefined) {
      this.$date.setMilliseconds(num)
      return this
    }
    return this.$date.getMilliseconds()
  }
  /**
   * 获取月数
   * @param num 
   */
  month(): number
  /**
   * 设置月数
   * @param num 
   */
  month(num: number): ZQDate
  month(num?: number): number | ZQDate {
    if (num !== undefined) {
      this.$date.setMonth(num)
      return this
    }
    return this.$date.getMonth()
  }
  /**
   * 获取当前日
   * @param num 
   */
  date(): number
  /**
   * 设置日数
   * @param num 
   */
  date(num: number): ZQDate
  date(num?: number): number | ZQDate {
    if (num !== undefined) {
      this.$date.setDate(num)
      return this
    }
    return this.$date.getDate()
  }
  /**
   * 获取当前季度
   * @param num 
   */
  quarter(): number
  /**
   * 设置季度数
   * @param num 1-4季度
   */
  quarter(num: number): ZQDate
  quarter(num?: number): number | ZQDate {
    if (num !== undefined) {
      // 获取季度开始时间
      const month: number = (num - 1) * 3
      this.$date.setMonth(month)
      return this
    }
    return Math.floor(this.month() / 3) + 1
  }
  /**
   * 获取当前年
   * @param num 
   */
  year(): number
  /**
   * 设置年数
   * @param num 
   */
  year(num: number): ZQDate
  year(num?: number): number | ZQDate {
    if (num !== undefined) {
      this.$date.setFullYear(num)
      return this
    }
    return this.$date.getFullYear()
  }
  /**
   * 获取当前周几
   * @param num 
   */
  day(): number
  /**
   * 设置周几
   * @param num 0-6，0为周日
   */
  day(num: number): ZQDate
  day(num?: number): number | ZQDate {
    // 获取当前周几
    const curDay: number = this.$date.getDay()
    if (num !== undefined) {
      if (curDay > num) {
        // 减去对应天数
        this.sub(curDay - num, 'day')
      } else {
        this.add(num - curDay, 'day')
      }
      return this
    }
    return curDay
  }
  /**
   * 相对开始时间
   * @param format 相对类型
   */
  startOf(format: TTimeFormat | 'week' | 'quarter') {
    const action = {
      day: () => { // 当天最开始的时间
        this.hour(0).minute(0).second(0).millisecond(0)
      },
      hour: () => { // 当前小时最开始的时间
        this.minute(0).second(0).millisecond(0)
      },
      minute: () => { // 当前分钟最开始的时间
        this.second(0).millisecond(0)
      },
      month: () => { // 当前月份最开始的时间
        this.date(1).hour(0).minute(0).second(0).millisecond(0)
      },
      quarter: () => { // 当前季度最开始时间
        this.quarter(this.quarter()).date(1).hour(0).minute(0).second(0).millisecond(0)
      },
      second: () => { // 当前秒最开始的时间
        this.millisecond(0)
      },
      week: () => { // 当前周最开始的时间
        this.day(0).hour(0).minute(0).second(0).millisecond(0)
      },
      year: () => { // 当前年最开始 的时间
        this.month(0).date(1).hour(0).minute(0).second(0).millisecond(0)
      }
    }
    typeof action[format] === 'function' && action[format]()
    return this
  }
  /**
   * 相对结束时间
   * @param format 相对类型
   */
  endOf(format: TTimeFormat | 'week' | 'quarter') {
    const action = {
      day: () => { // 当前天的结束时间
        this.hour(23).minute(59).second(59).millisecond(999)
      },
      hour: () => { // 当前小时的结束时间
        this.minute(59).second(59).millisecond(999)
      },
      minute: () => { // 当前分钟的结束时间
        this.second(59).millisecond(999)
      },
      month: () => { // 当前月份的结束时间
        this.month(this.month() + 1).date(0).hour(23).minute(59).second(59).millisecond(999)
      },
      quarter: () => { // 当前季度的结束时间
        this.quarter(this.quarter() + 1).date(0).hour(23).minute(59).second(59).millisecond(999)
      },
      second: () => { // 当前秒的结束时间
        this.millisecond(999)
      },
      week: () => { // 当前周的结束时间
        this.day(6).hour(23).minute(59).second(59).millisecond(999)
      },
      year: () => { // 当前年的结束时间
        this.month(12).date(0).hour(23).minute(59).second(59).millisecond(999)
      }
    }
    typeof action[format] === 'function' && action[format]()
    return this
  }
  /**
   * 判断是否在指定时间之前
   * @param date 时间
   */
  isBefore(date: Date | string | number | ZQDate): boolean {
    if (!(date instanceof ZQDate)) {
      date = ZDate(date as any)
    }
    return date ? this.getTime() < date.getTime() : false
  }
  /**
   * 判断是否在指定时间之后
   * @param date 时间
   */
  isAfter(date: Date | string | number | ZQDate): boolean {
    if (!(date instanceof ZQDate)) {
      date = ZDate(date as any)
    }
    return date ? this.getTime() > date.getTime() : false
  }
  /**
   * 判断是否和指定时间相同
   * @param date 时间
   */
  isSame(date: Date | string | number | ZQDate): boolean {
    if (!(date instanceof ZQDate)) {
      date = ZDate(date as any)
    }
    return date ? this.getTime() === date.getTime() : false
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