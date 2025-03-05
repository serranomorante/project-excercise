import * as React from 'react'
import { labelTextMain, textInputLabelVariants } from './TextInputLabel.css'

/**
 * @param {import('./TextInputLabel.types').ITextInputLabelProps} props
 * @param {import('react').ForwardedRef<HTMLLabelElement>} ref
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
