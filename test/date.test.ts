/**
 * 测试用例
 */
import { ZDate } from '../src/index'
test('时间格式为dsad是否为返回undefined', () => {
  expect(ZDate('dsad')).toBeUndefined()
})
test('时间格式2020-01-02是否能拿到', () => {
  expect(ZDate('2020-01-02').date.getTime()).toBe(new Date('2020/01/02').getTime())
})
test('时间格式转换是否为2020-02-03 11:22:33', () => {
  expect(ZDate('2020-02-03 01:02:33').format('YYYY-MM-DD HH:mm:ss')).toBe('2020-02-03 01:02:33')
})