import * as React from 'react'
import { toastVariants } from './Toast.css'
import { ErrorSignIcon } from '@/components/client/common'

const TYPE_TO_SIGN_MAP = {
  error: <ErrorSignIcon />,
  success: <span>Success: </span>,
  default: <span></span>,
  info: <span></span>,
}

/**
 * @param {import('./Toast.types').IToastProps} props
 * @param {import('react').ForwardedRef<HTMLDivElement>} ref
 */
function ToastBase(props, ref) {
  const { children, state, type, ...rest } = props

  return (
    <div ref={ref} className={toastVariants({ state })} {...rest}>
      {TYPE_TO_SIGN_MAP[type]}
      {children}
    </div>
  )
}

export const Toast = React.forwardRef(ToastBase)
