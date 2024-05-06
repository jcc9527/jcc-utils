import { isMobilePhone, isMail } from '../../src/regExp'

describe('判断是否为手机号', () => {
  it('isMobilePhone(13888888888) -> should return true', () => {
    expect(isMobilePhone(13888888888)).toBe(true)
  })
  it('isMobilePhone(1388888888) -> should return false', () => {
    expect(isMobilePhone(1388888888)).toBe(false)
  })
  it('isMobilePhone(123) -> should return false', () => {
    expect(isMobilePhone(123)).toBe(false)
  })
  it('isMobilePhone(null) -> should return false', () => {
    expect(isMobilePhone(null)).toBe(false)
  })
  it('isMobilePhone("test") -> should return false', () => {
    expect(isMobilePhone('test')).toBe(false)
  })
})

describe('判断是否为邮箱', () => {
  it('isMail("sunyun898@sina.com") -> should return true', () => {
    expect(isMail('sunyun898@sina.com')).toBe(true)
  })
  it('isMail("sunyun898@sina") -> should return false', () => {
    expect(isMail('sunyun898@sina')).toBe(false)
  })
  it('isMail("张三@xx.com") -> should return true', () => {
    expect(isMail('张三@xx.com')).toBe(true)
  })
})
