import { userRepository } from "./user.repository";

class UserService {
  /**
   * @param {import("./user.types").IFetchUserDetailArgs} args
   */
  async fetchUserDetail({ userId, ctx }) {
    return userRepository.fetchUserDetail({ userId, ctx })
  }
}

export const userService = new UserService()
