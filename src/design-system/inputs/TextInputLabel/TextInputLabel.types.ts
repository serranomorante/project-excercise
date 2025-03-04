import { RecipeVariants } from "@vanilla-extract/recipes";
import { textInputLabelVariants } from "./TextInputLabel.css";

export type TTextInputLabelVariants = RecipeVariants<typeof textInputLabelVariants> & {}

export interface ITextInputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, TTextInputLabelVariants {
  children: React.JSX.Element | React.ReactNode | React.ReactNode[]
  label: string
}
