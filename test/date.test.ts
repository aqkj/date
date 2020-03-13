/**
 * 测试用例
 */
import { ZDate } from '../src/index'
// test('时间格式为dsad是否为返回undefined', () => {
//   expect(ZDate('dsad')).toBeUndefined()
// })
test('时间格式2020-01-02是否能拿到', () => {
  expect(ZDate('2020-01-02').date.getTime()).toBe(new Date('2020/01/02').getTime())
})
test('时间格式转换是否为2020-02-03 11:22:33', () => {
  expect(ZDate('2020-02-03 01:02:33').format('YYYY-MM-DD HH:mm:ss')).toBe('2020-02-03 01:02:33')
})
test('时间clone是否克隆成功', () => {
  const zqDate = ZDate('2020-02-03 01:02:33')
  const cloneZqDate = zqDate.clone()
  expect(zqDate.format('YYYY-MM-DD')).toBe(cloneZqDate.format('YYYY-MM-DD'))
  expect(zqDate === cloneZqDate).toBeFalsy()
})
test('时间减法是否成功', () => {
  // 减一秒
  expect(ZDate('2020-02-03 01:02:32').sub(1, 'second').format('YYYY-MM-DD HH:mm:ss')).toBe('2020-02-03 01:02:31')
  // 减一分钟
  expect(ZDate('2020-02-03 01:02:33').sub(1, 'minute').format('YYYY-MM-DD HH:mm:ss')).toBe('2020-02-03 01:01:33')
  // 减一小时
  expect(ZDate('2020-02-03 01:02:33').sub(1, 'hour').format('YYYY-MM-DD HH:mm:ss')).toBe('2020-02-03 00:02:33')
  // 减一天
  expect(ZDate('2020-02-03 01:02:33').sub(1, 'day').format('YYYY-MM-DD HH:mm:ss')).toBe('2020-02-02 01:02:33')
  // 减一个月
  expect(ZDate('2020-02-03 01:02:33').sub(1, 'month').format('YYYY-MM-DD HH:mm:ss')).toBe('2020-01-03 01:02:33')
  // 减一年
  expect(ZDate('2020-02-03 01:02:33').sub(1, 'year').format('YYYY-MM-DD HH:mm:ss')).toBe('2019-02-03 01:02:33')
})
test('时间加法是否成功', () => {
  // 加一秒
  expect(ZDate('2020-02-03 01:02:32').add(1, 'second').format('YYYY-MM-DD HH:mm:ss')).toBe('2020-02-03 01:02:33')
  // 加一分钟
  expect(ZDate('2020-02-03 01:02:33').add(1, 'minute').format('YYYY-MM-DD HH:mm:ss')).toBe('2020-02-03 01:03:33')
  // 加一小时
  expect(ZDate('2020-02-03 01:02:33').add(1, 'hour').format('YYYY-MM-DD HH:mm:ss')).toBe('2020-02-03 02:02:33')
  // 加一天
  expect(ZDate('2020-02-03 01:02:33').add(1, 'day').format('YYYY-MM-DD HH:mm:ss')).toBe('2020-02-04 01:02:33')
  // 加一个月
  expect(ZDate('2020-02-03 01:02:33').add(1, 'month').format('YYYY-MM-DD HH:mm:ss')).toBe('2020-03-03 01:02:33')
  // 加一年
  expect(ZDate('2020-02-03 01:02:33').add(1, 'year').format('YYYY-MM-DD HH:mm:ss')).toBe('2021-02-03 01:02:33')
})