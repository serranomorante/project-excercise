export interface IRequestContext {
  headers: HeadersInit
}

export type TSearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export interface APIResponse<T> {
  success: boolean
  status: number
  code: number
  data: T
  message?: string
  errors?: string[]
}
