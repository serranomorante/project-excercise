'use server'

/**
 * @import { IFetchUserDetailArgs } from './user.types'
 */
import { userService } from "./user.service";
import { getLoanServiceApiHeaders } from "@/common/utils/common.utils";

/**
 * @param {IFetchUserDetailArgs} args
 */
export async function fetchUserDetail({ userId }) {
  const ctx = { headers: getLoanServiceApiHeaders() }
  return userService.fetchUserDetail({ userId, ctx })
}
