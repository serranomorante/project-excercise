import { RecipeVariants } from "@vanilla-extract/recipes";
import { textVariants } from "./Text.css";

export type ITextVariants = RecipeVariants<typeof textVariants> & { className?: string };

export interface ITextProps extends React.HTMLAttributes<HTMLParagraphElement>, ITextVariants {
  children: React.JSX.Element | React.ReactNode | React.ReactNode[];
}
