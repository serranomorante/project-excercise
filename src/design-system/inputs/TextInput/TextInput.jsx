import * as React from 'react'
import { inputLeftAddon, inputRightAddon, main, textInputVariants } from "./TextInput.css"

/**
 * @param {import('./TextInput.types').ITextInputProps} props
 * @param {import('react').ForwardedRef<HTMLInputElement>} ref
 */
function TextInputBase(props, ref) {
  const { size, fullWidth, InputLeftAddon, InputRightAddon, ...rest } = props

  return (
    <div className={main({ type: rest.type })}>
      <span className={inputLeftAddon}>{InputLeftAddon}</span>
      <input
        ref={ref}
        className={textInputVariants({ size, InputLeftAddon: !!InputLeftAddon, fullWidth, readOnly: rest.readOnly })}
        {...rest}
      />
      <span className={inputRightAddon}>{InputRightAddon}</span>
    </div>
  )
}

export const TextInput = React.forwardRef(TextInputBase)
