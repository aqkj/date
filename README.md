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
```

## Todo
- [x] 时间格式化
- [x] 时间加减法
- [ ] 时差计算
- [ ] 对应时间类型开始和结束时间