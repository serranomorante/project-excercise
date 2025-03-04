import { loanRepository } from "./loan.repository";
import { IRequestLoanArgs } from "./loan.types";

class LoanService {
  public async requestLoan({ data, userId, ctx }: IRequestLoanArgs) {
    return loanRepository.requestLoan({ data, userId, ctx })
  }
}

export const loanService = new LoanService()
