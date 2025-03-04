import { ComplexStyleRule } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const textSize = {
  xs: { fontSize: 12 },
  sm: { fontSize: 14 },
  md: { fontSize: 16 },
  lg: { fontSize: 18 },
  xl: { fontSize: 26 },
} satisfies Record<string, ComplexStyleRule>


const textWeight = {
  normal: {},
  bold: { fontWeight: 800 },
  semibold: { fontWeight: 600 }
} satisfies Record<string, ComplexStyleRule>

export const textVariants = recipe({
  variants: {
    size: textSize,
    weight: textWeight
  },
  defaultVariants: {
    size: 'sm',
    weight: 'normal'
  }
});
