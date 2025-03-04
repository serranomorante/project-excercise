import * as React from 'react'
import { inputLeftAddon, inputRightAddon, main, textInputVariants } from "./TextInput.css"
import { ITextInputProps } from "./TextInput.types"

function TextInputBase(props: ITextInputProps, ref: React.ForwardedRef<HTMLInputElement>) {
  const { size, fullWidth, InputLeftAddon, InputRightAddon, ...rest } = props

  return (
    <div className={main({ type: rest.type })}>
      <span className={inputLeftAddon}>{InputLeftAddon}</span>
      <input
        ref={ref}
        className={textInputVariants({ size, InputLeftAddon: Boolean(InputLeftAddon), fullWidth })}
        {...rest}
      />
      <span className={inputRightAddon}>{InputRightAddon}</span>
    </div>
  )
}

export const TextInput = React.forwardRef(TextInputBase)
