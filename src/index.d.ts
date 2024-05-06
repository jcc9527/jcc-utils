declare namespace jccTools {
  /**
   * 判断是否为合法手机号
   * @param input 任意值
   * @returns boolean
   */
  export function isMobilePhone(input: any): boolean

  /**
   * 判断是否为合法邮箱
   * @param input 任意值
   * @returns boolean
   */
  export function isMail(input: any): boolean

  /**
   * 判断是否为数组
   * @param input 任意值
   * @returns boolean
   */
  export function isArray(input: any): boolean
}

declare module 'jcc-tools' {
  export = jccTools
}
