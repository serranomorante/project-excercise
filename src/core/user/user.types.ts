import { IRequestContext } from "@/common"

export interface IFetchUserDetailArgs {
  userId: number
  ctx?: IRequestContext
}

export interface IUserDetails {
  id: number
  name: string
  surname: string
  email: string
  phone: string
  age: number
}
