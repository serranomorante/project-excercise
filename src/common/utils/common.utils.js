/**
 * @import { APIResponse } from '@/common'
 */
import { LOANS_SERVICE_KEY } from "@/common/configuration";

export function getLoanServiceApiHeaders() {
  return {
    'X-WEB-KEY': LOANS_SERVICE_KEY
  }
}

/**
 * Returns true if the object has the passed property.
 *
 * @template {PropertyKey} TKey
 * @template {Record<TKey, any>} T
 *
 * @param {T} obj
 * @param {TKey} key
 * @returns {key is keyof T}
 */
export function hasProperty(obj, key) {
  return key in obj
}

/**
 * @template T
 * @param {Response} response
 * @returns {APIResponse<T>}
 */
export function adaptUnknownErrors(response) {
  let errorMessage = "Unhandled error"
  if (hasProperty(response, "statusText")) {
    errorMessage += `: ${response.statusText}`
  }
  // @ts-expect-error
  return { success: false, message: errorMessage, status: 500, code: 500 }
}
