import * as React from 'react'
import { IToastProps } from "./Toast.types"
import { toastVariants } from './Toast.css'
import { ErrorSignIcon } from '@/components/client/common'

const TYPE_TO_SIGN_MAP = {
  error: <ErrorSignIcon />,
  success: <span>Success: </span>,
  default: <span></span>,
  info: <span></span>,
}

function ToastBase(props: IToastProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { children, state, type, ...rest } = props

  return (
    <div ref={ref} className={toastVariants({ state })} {...rest}>
      {TYPE_TO_SIGN_MAP[type]}
      {children}
    </div>
  )
}

export const Toast = React.forwardRef(ToastBase)
