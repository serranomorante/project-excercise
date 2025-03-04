import { LOANS_SERVICE_KEY } from "@/common/configuration";
import { APIResponse } from "../interfaces";

export function getLoanServiceApiHeaders() {
  return {
    'X-WEB-KEY': LOANS_SERVICE_KEY
  }
}

export function hasProperty<T extends object, K extends PropertyKey>(
  obj: T,
  key: K
): obj is T & Record<K, unknown> {
  return key in obj
}

export function adaptUnknownErrors<T>(response: Response): APIResponse<T> {
  let errorMessage = "Unhandled error"
  if (hasProperty(response, "statusText")) {
    errorMessage += `: ${response.statusText}`
  }
  return { success: false, message: errorMessage, status: 500, code: 500 }
}
