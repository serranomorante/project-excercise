import * as React from 'react'
import { buttonVariants } from './Button.css'

/**
 * @param {import('./Button.types').IButtonProps} props
 * @param {import('react').ForwardedRef<HTMLButtonElement>} ref
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
