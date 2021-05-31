namespace Common {
  // 可选key
  export interface PlainObject {
    [key: string]: any
  }
  // 后台返回结果固定格式
  export interface Result<T = any> {
    msg: string // 回台返回描述
    data: T // 数据
    status: number | string // 状态码
  }
}

declare interface Window {
  
}
