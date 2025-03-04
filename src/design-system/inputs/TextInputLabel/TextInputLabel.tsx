import * as React from 'react'
import { ITextInputLabelProps } from './TextInputLabel.types'
import { textInputLabelVariants } from './TextInputLabel.css'

export function TextInputLabelBase(props: ITextInputLabelProps, ref: React.ForwardedRef<HTMLLabelElement>) {
  const { children, label, ...rest } = props
  return (
    <label ref={ref} className={textInputLabelVariants(rest)} {...rest}>
      <span>{label}</span>
      {InputLeftAddon}
      {children}
    </label>
  )
}

export const TextInputLabel = React.forwardRef(TextInputLabelBase)
