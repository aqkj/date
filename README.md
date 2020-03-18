# ZDate
> 方便的日期操作工具 :monkey:

## 安装说明
```
npm i -S @aqkj/date
```

## 使用说明
```js
import { ZDate } from '@aqkj/date'

/* 创建ZDate对象 */
ZDate('2020-12-12') // 通过字符串创建
ZDate(1583404222239) // 通过时间戳
ZDate(new Date()) // 通过时间对象

/* 格式化日期 */
ZDate().format('YYYY-MM-DD HH:mm:ss.SSS')
ZDate(1583404222239).format('YYYY-MM-DD HH:mm:ss.SSS')

/* 时间减法 */
ZDate().sub(1, 'day').format('YYYY-MM-DD HH:mm:ss.SSS') // 减去1天
ZDate().sub(1, 'month').format('YYYY-MM-DD HH:mm:ss.SSS') // 减去1个月
ZDate().sub(1, 'year').format('YYYY-MM-DD HH:mm:ss.SSS') // 减去1年
ZDate().sub(1, 'hour').format('YYYY-MM-DD HH:mm:ss.SSS') // 减去1小时
ZDate().sub(1, 'minute').format('YYYY-MM-DD HH:mm:ss.SSS') // 减去1分钟
ZDate().sub(1, 'second').format('YYYY-MM-DD HH:mm:ss.SSS') // 减去1秒

/* 时间加法 */
ZDate().add(1, 'day').format('YYYY-MM-DD HH:mm:ss.SSS') // 加上一天
ZDate().add(1, 'month').format('YYYY-MM-DD HH:mm:ss.SSS') // 加上一个月
ZDate().add(1, 'year').format('YYYY-MM-DD HH:mm:ss.SSS') // 加上一年
ZDate().add(1, 'hour').format('YYYY-MM-DD HH:mm:ss.SSS') // 加上一小时
ZDate().add(1, 'minute').format('YYYY-MM-DD HH:mm:ss.SSS') // 加上一分钟
ZDate().add(1, 'second').format('YYYY-MM-DD HH:mm:ss.SSS') // 加上一秒

/* 时间差 */
ZDate().diff('2019-10-10') // 计算时间差，返回时间戳
ZDate().diff('2019-10-10', 'day') // 返回天数差
ZDate().diff('2019-10-10', 'month') // 返回月份差
ZDate().diff('2019-10-10', 'year') // 返回年数差
ZDate().diff('2019-10-10', 'week') // 返回周数差
ZDate().diff('2019-10-10', 'second') // 返回秒数差
ZDate().diff('2019-10-10', 'hour') // 返回小时差
ZDate().diff('2019-10-10', 'minute') // 返回分钟差

/* 对应时间类型开始时间 */
ZDate('2020-3-16').startOf('day').format('HH:mm:ss.SSS') // 当前天开始时间
ZDate('2020-3-16 12:20:30').startOf('hour').format('HH:mm:ss.SSS') // 当前小时开始时间
ZDate('2020-3-16 12:20:00').startOf('minute').format('HH:mm:ss.SSS') // 当前分钟开始时间
ZDate('2020-3-16 12:20:00').startOf('month').format('YYYY-MM-DD HH:mm:ss.SSS') // 当前月开始时间
ZDate('2020-3-16 12:20:00').startOf('quarter').format('YYYY-MM-DD HH:mm:ss.SSS') // 当前季度开始时间
ZDate('2020-3-16 12:20:00').startOf('second').format('YYYY-MM-DD HH:mm:ss.SSS') // 当前秒开始时间
ZDate('2020-3-16 12:20:00').startOf('week').format('YYYY-MM-DD HH:mm:ss.SSS') // 当前周开始时间
ZDate('2020-3-16 12:20:00').startOf('year').format('YYYY-MM-DD HH:mm:ss.SSS') // 当前年开始时间

/* 对应时间类型结束时间 */
ZDate('2020-3-16').endOf('day').format('HH:mm:ss.SSS') // 当前天结束时间
ZDate('2020-3-16 12:20:30').endOf('hour').format('HH:mm:ss.SSS') // 当前小时结束时间
ZDate('2020-3-16 12:20:00').endOf('minute').format('HH:mm:ss.SSS') // 当前分钟结束时间
ZDate('2020-3-16 12:20:00').endOf('month').format('YYYY-MM-DD HH:mm:ss.SSS') // 当前月结束时间
ZDate('2020-3-16 12:20:00').endOf('quarter').format('YYYY-MM-DD HH:mm:ss.SSS') // 当前季度结束时间
ZDate('2020-3-16 12:20:00').endOf('second').format('YYYY-MM-DD HH:mm:ss.SSS') // 当前秒结束时间
ZDate('2020-3-16 12:20:00').endOf('week').format('YYYY-MM-DD HH:mm:ss.SSS') // 当前周结束时间
ZDate('2020-3-16 12:20:00').endOf('year').format('YYYY-MM-DD HH:mm:ss.SSS') // 当前年结束时间

/* 获取对应时间类型/设置对应时间类型数值 */
ZDate('2020-3-16').day() // 获取当前周几
ZDate('2020-3-16').day(1) // 设置当前周几 0-6

ZDate('2020-3-16 12:20:30').year() // 获取当前几几年
ZDate('2020-3-16 12:20:30').year(2019) // 设置当前年

ZDate('2020-3-16 12:20:30').quarter() // 获取当前季度
ZDate('2020-3-16 12:20:30').quarter() // 设置当前季度 1-4

ZDate('2020-3-16 12:20:30').date() // 获取当前几号
ZDate('2020-3-16 12:20:30').date(30) // 设置当前几号

ZDate('2020-3-16 12:20:30').month() // 获取当前月份
ZDate('2020-3-16 12:20:30').month(11) // 设置当前月份 0-11

ZDate('2020-3-16 12:20:30').millisecond() // 获取当前毫秒
ZDate('2020-3-16 12:20:30').millisecond(999) // 设置当前毫秒

ZDate('2020-3-16 12:20:30').second() // 获取当前秒
ZDate('2020-3-16 12:20:30').second(12) // 设置当前秒

ZDate('2020-3-16 12:20:30').minute() // 获取当前分钟
ZDate('2020-3-16 12:20:30').minute(12) // 设置当前分钟

ZDate('2020-3-16 12:20:30').hour() // 获取当前小时
ZDate('2020-3-16 12:20:30').hour(12) // 设置当前小时

/* 判断时间大小/时间相同 */
const date = ZDate('2020-3-16 12:20:30')
 // 判断是否在对应时间之前
date.isBefore('2020-03-05')
date.isBefore('2020-03-30')
// 判断是否在对应时间之后
date.isAfter('2020/03/04')
date.isAfter(new Date('2020/03/20'))
date.isAfter(new Date('2020/03/10').getTime())
date.isAfter(ZDate(new Date('2020/03/10').getTime()))
// 判断是否和对应时间相同
date.isSame(ZDate(new Date('2020/03/16').getTime()))
date.isSame(new Date('2020/03/16'))
date.isSame('2020/03/16')
date.isSame(1584512884678)
```

## Todo
- [x] 时间格式化
- [x] 时间加减法
- [x] 时差计算
- [x] 对应时间类型开始和结束时间
- [x] 判断时间大小/时间相同
- [ ] 时间间隔/相对时间
- [x] 获取对应时间类型/设置对应时间类型数值