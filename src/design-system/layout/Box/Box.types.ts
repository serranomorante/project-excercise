import { RecipeVariants } from "@vanilla-extract/recipes";
import { boxVariants } from './Box.css';

export type IBoxVariants = RecipeVariants<typeof boxVariants> & { className?: string };

export interface IBoxProps extends React.HTMLAttributes<HTMLDivElement>, IBoxVariants {
  children: React.JSX.Element | React.ReactNode | React.ReactNode[];
}
