import * as React from 'react'
import { IButtonProps } from './Button.types'
import { buttonVariants } from './Button.css'

function ButtonBase(props: IButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) {
  const { children, size, fullWidth, colorSchema, disabled, ...rest } = props

  return (
    <button ref={ref} className={buttonVariants({ size, fullWidth, colorSchema, disabled })} {...rest}>
      {children}
    </button>
  )
}

export const Button = React.forwardRef(ButtonBase)
