import { RecipeVariants } from "@vanilla-extract/recipes";
import { buttonVariants } from "./Button.css";

export type TButtonVariants = RecipeVariants<typeof buttonVariants> & {}

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, TButtonVariants {
  children: React.JSX.Element | React.ReactNode | React.ReactNode[]
}

