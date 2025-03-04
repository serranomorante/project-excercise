import { userRepository } from "./user.repository";
import { IFetchUserDetailArgs } from "./user.types";

class UserService {
  public async fetchUserDetail({ userId, ctx }: IFetchUserDetailArgs) {
    return userRepository.fetchUserDetail({ userId, ctx })
  }
}

export const userService = new UserService()
