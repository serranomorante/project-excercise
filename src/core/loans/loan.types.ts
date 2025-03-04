import { IRequestContext } from "@/common"

export interface IRequestLoanDto {
  name: string
  surname: string
  email: string
  phone: string
  age: number
  loan_amount: number
  loan_date: string
  loan_weeks: number
  check: boolean
}

export interface IRequestLoanArgs {
  data: IRequestLoanDto
  userId: number
  ctx?: IRequestContext
}

export interface ILoanDetails extends IRequestLoanDto {}
