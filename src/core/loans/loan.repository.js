/**
 * @import { IRequestLoanArgs, ILoanDetails } from './loan.types'
 * @import { APIResponse } from '@/common'
 */
import { LOANS_SERVICE_API, adaptUnknownErrors, hasProperty } from "@/common";

class LoanRepository {
  /**
   * @param {IRequestLoanArgs} args
   * @returns {Promise<APIResponse<ILoanDetails>>}
   */
  async requestLoan({ data, userId, ctx }) {
    const url = `${LOANS_SERVICE_API}/recruitment/fullstack/users/${userId}`
    return fetch(url, { method: 'POST', cache: 'no-cache', body: JSON.stringify(data), headers: ctx?.headers })
    .then(async response => {
      if (!response.ok) console.error('ERROR REQUESTING LOAN')
      return await response?.json()
        .then(json_response => {
          if (!hasProperty(json_response, "data")) {
            return { ...json_response, data: { ...data, id: userId } }
          }
          return json_response
        })
        .catch(() => adaptUnknownErrors(response))
    })
  }
}

export const loanRepository = new LoanRepository()
