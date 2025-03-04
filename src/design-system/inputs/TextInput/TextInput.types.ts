import { RecipeVariants } from "@vanilla-extract/recipes"
import { textInputVariants } from "./TextInput.css"

export type TTextInputVariants = RecipeVariants<typeof textInputVariants> & {}

export interface ITextInputProps extends
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
  Omit<TTextInputVariants, 'InputLeftAddon' | 'InputRightAddon'> {
  InputLeftAddon?: React.ReactNode
  InputRightAddon?: React.ReactNode
}
