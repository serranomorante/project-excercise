import { RecipeVariants } from "@vanilla-extract/recipes"
import { textInputVariants } from "./TextInput.css"

export type TTextInputVariants = RecipeVariants<typeof textInputVariants> & { className?: string }

export interface ITextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, TTextInputVariants {
  InputLeftAddon?: React.ReactNode
  InputRightAddon?: React.ReactNode
}
