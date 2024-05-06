import { isArray } from '../../src/is'

describe('判断是否为数组', () => {
  it('isArray({})) -> should return false', () => {
    expect(isArray({})).toBe(false)
  })
  it('isArray([])) -> should return true', () => {
    expect(isArray([])).toBe(true)
  })
})
