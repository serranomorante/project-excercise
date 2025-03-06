/**
 * @import { IFetchUserDetailArgs } from './user.types'
 */
import { userRepository } from "./user.repository";

class UserService {
  /**
   * @param {IFetchUserDetailArgs} args
   */
  async fetchUserDetail({ userId, ctx }) {
    return userRepository.fetchUserDetail({ userId, ctx })
  }
}

export const userService = new UserService()
