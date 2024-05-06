const mobilePhoneReg = /^1[3-9][0-9]{9}$/
const mailReg = /[\u4e00-\u9fa5\w]+([-+.'][\u4e00-\u9fa5\w]+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/


export function isMobilePhone(input: any): boolean {
  return mobilePhoneReg.test(input)
}

export function isMail(input: any) : boolean {
  return mailReg.test(input)
}