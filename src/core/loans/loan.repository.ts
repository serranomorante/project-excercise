import { APIResponse, LOANS_SERVICE_API, adaptUnknownErrors, hasProperty } from "@/common";
import { ILoanDetails, IRequestLoanArgs } from "./loan.types";

class LoanRepository {
  public async requestLoan({ data, userId, ctx }: IRequestLoanArgs): Promise<APIResponse<ILoanDetails>> {
    const url = `${LOANS_SERVICE_API}/recruitment/fullstack/users/${userId}`
    return fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      body: JSON.stringify(data),
      headers: { 'Content-type': 'application/json', ...(ctx?.headers ?? {}) }
    }).then(async response => {
      if (!response.ok) {
        console.error('ERROR REQUESTING LOAN')
        return await response?.json().catch(() => adaptUnknownErrors(response))
          .then(json_response => ({ ...json_response, data }))
      }
      const json_response = await response.json()
      return { ...json_response, data }
    })
  }
}

export const loanRepository = new LoanRepository()
