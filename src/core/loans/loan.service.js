/**
 * @import { IRequestLoanArgs } from './loan.types'
 */
import { loanRepository } from "./loan.repository";

class LoanService {
  /**
   * @param {IRequestLoanArgs} args
   */
  async requestLoan({ data, userId, ctx }) {
    return loanRepository.requestLoan({ data, userId, ctx })
  }
}

export const loanService = new LoanService()
