'use server'

import { userService } from "./user.service";
import { getLoanServiceApiHeaders } from "@/common/utils/common.utils";

/**
 * @param {import("./user.types").IFetchUserDetailArgs} args
 */
export async function fetchUserDetail({ userId }) {
  const ctx = { headers: getLoanServiceApiHeaders() }
  return userService.fetchUserDetail({ userId, ctx })
}
