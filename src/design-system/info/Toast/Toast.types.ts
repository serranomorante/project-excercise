import { RecipeVariants } from "@vanilla-extract/recipes"
import { toastVariants } from "./Toast.css"

export type IToastVariants = RecipeVariants<typeof toastVariants> & { className?: string }

export interface IToastProps extends React.HTMLAttributes<HTMLDivElement>, IToastVariants {
  children: React.JSX.Element | React.ReactNode | React.ReactNode[]
  type: 'success' | 'error' | 'info' | 'default'
}
