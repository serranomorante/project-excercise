import * as React from 'react'
import { inputLeftAddon, main, textInputVariants } from "./TextInput.css"
import { ITextInputProps } from "./TextInput.types"

function TextInputBase(props: ITextInputProps, ref: React.ForwardedRef<HTMLInputElement>) {
  const { size, fullWidth, InputLeftAddon, InputRightAddon, ...rest } = props

  return (
    <div className={main}>
      <span className={inputLeftAddon}>{InputLeftAddon}</span>
      <input
        ref={ref}
        className={textInputVariants({ size, InputLeftAddon: Boolean(InputLeftAddon), fullWidth })}
        {...rest}
      />
      {InputRightAddon}
    </div>
  )
}

export const TextInput = React.forwardRef(TextInputBase)
