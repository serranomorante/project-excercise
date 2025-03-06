/**
 * @import { IFetchUserDetailArgs, IUserDetails } from './user.types'
 * @import { APIResponse } from '@/common'
 */
import { LOANS_SERVICE_API, adaptUnknownErrors } from "@/common";

class UserRepository {
  /**
   * @param {IFetchUserDetailArgs} args
   * @returns {Promise<APIResponse<IUserDetails>>}
   */
  async fetchUserDetail({ userId, ctx }) {
    const url = `${LOANS_SERVICE_API}/recruitment/fullstack/users?id=${userId}`
    return fetch(url, { headers: ctx?.headers, })
      .then(async response => {
        if (!response.ok) console.error('ERROR REQUESTING USER DETAILS')
        return await response?.json().catch(() => adaptUnknownErrors(response))
      })
  }
}

export const userRepository = new UserRepository()
