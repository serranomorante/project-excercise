/**
 * @import { IButtonProps } from './Button.types'
 */
import * as React from 'react'
import { buttonVariants } from './Button.css'

/**
 * @param {IButtonProps} props
 * @param {React.ForwardedRef<HTMLButtonElement>} ref
 */
function ButtonBase(props, ref) {
  const { children, size, fullWidth, colorSchema, disabled, ...rest } = props

  return (
    <button ref={ref} className={buttonVariants({ size, fullWidth, colorSchema, disabled })} {...rest}>
      {children}
    </button>
  )
}

export const Button = React.forwardRef(ButtonBase)
