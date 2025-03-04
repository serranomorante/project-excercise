import { RecipeVariants } from "@vanilla-extract/recipes";
import { modalVariants } from './Modal.css';

export type IModalVariants = RecipeVariants<typeof modalVariants> & {};

export interface IModalProps extends React.HTMLAttributes<HTMLDivElement>, IModalVariants {
  children: React.JSX.Element | React.ReactNode | React.ReactNode[];
  isOpen: boolean;
  onClose: () => void;
}
