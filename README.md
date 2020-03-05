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
```