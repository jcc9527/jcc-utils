/**
 * 判断是否为数组
 * @param input 任意值
 * @returns boolean
 */
export function isArray(input: any) : boolean {
  return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]'
}