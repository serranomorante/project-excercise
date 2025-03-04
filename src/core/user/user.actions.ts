'use server'

import { IFetchUserDetailArgs } from "./user.types";
import { userService } from "./user.service";
import { getLoanServiceApiHeaders } from "@/common/utils/common.utils";

export async function fetchUserDetail({ userId }: IFetchUserDetailArgs) {
  const ctx = { headers: getLoanServiceApiHeaders() }
  return userService.fetchUserDetail({ userId, ctx })
}
