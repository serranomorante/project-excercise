'use server'

import { loanService } from "./loan.service";
import { IRequestLoanDto } from "./loan.types";
import { getLoanServiceApiHeaders } from "@/common/utils/common.utils";

export async function requestLoan(formData: FormData) {
  const ctx = { headers: getLoanServiceApiHeaders() }
  const userId = Number(formData.get("id"))

  const data: IRequestLoanDto = {
    age: Number(formData.get("age")),
    check: Boolean(formData.get("check")),
    email: String(formData.get("email")),
    loan_amount: Number(formData.get("loan_amount")),
    loan_date: String(formData.get("loan_date")),
    loan_weeks: Number(formData.get("loan_weeks")),
    name: String(formData.get("name")),
    phone: String(formData.get("phone")),
    surname: String(formData.get("surname")),
  }

  return loanService.requestLoan({ data, userId, ctx })
}
