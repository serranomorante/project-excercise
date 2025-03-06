/**
 * @import { ITextInputLabelProps } from './TextInputLabel.types'
 */
import * as React from 'react'
import { labelTextMain, textInputLabelVariants } from './TextInputLabel.css'

/**
 * @param {ITextInputLabelProps} props
 * @param {React.ForwardedRef<HTMLLabelElement>} ref
 */
export function TextInputLabelBase(props, ref) {
  const { children, label, ...rest } = props
  return (
    <label ref={ref} className={textInputLabelVariants(rest)} {...rest}>
      <span className={labelTextMain}>{label}</span>
      {children}
    </label>
  )
}

export const TextInputLabel = React.forwardRef(TextInputLabelBase)
