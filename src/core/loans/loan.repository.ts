import { APIResponse, LOANS_SERVICE_API, adaptUnknownErrors, hasProperty } from "@/common";
import { ILoanDetails, IRequestLoanArgs } from "./loan.types";

class LoanRepository {
  public async requestLoan({ data, userId, ctx }: IRequestLoanArgs): Promise<APIResponse<ILoanDetails>> {
    const url = `${LOANS_SERVICE_API}/recruitment/fullstack/users/${userId}`
    return fetch(url, { method: 'POST', cache: 'no-cache', body: JSON.stringify(data), headers: ctx?.headers })
    .then(async response => {
      if (!response.ok) console.error('ERROR REQUESTING LOAN')
      return await response?.json()
        .then(json_response => {
          if (!hasProperty(json_response as APIResponse<ILoanDetails>, "data")) {
            return { ...json_response, data }
          }
          return json_response
        })
        .catch(() => adaptUnknownErrors(response))
    })
  }
}

export const loanRepository = new LoanRepository()
