import { APIResponse, LOANS_SERVICE_API, adaptUnknownErrors } from "@/common";
import { IFetchUserDetailArgs, IUserDetails } from "./user.types";

class UserRepository {
  public async fetchUserDetail({ userId, ctx }: IFetchUserDetailArgs): Promise<APIResponse<IUserDetails>> {
    const url = `${LOANS_SERVICE_API}/recruitment/fullstack/users?id=${userId}`
    return fetch(url, { headers: ctx?.headers, })
      .then(async response => {
        if (!response.ok) console.error('ERROR REQUESTING USER DETAILS')
        return await response?.json().catch(() => adaptUnknownErrors(response))
      })
  }
}

export const userRepository = new UserRepository()
