import { ComplexStyleRule, globalStyle } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const textInputLabelVariantsSize = {
  xs: { fontSize: 12, },
  sm: { fontSize: 14, },
  md: { fontSize: 16, },
  lg: { fontSize: 18, },
} satisfies Record<string, ComplexStyleRule>

export const textInputLabelVariants = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  },
  variants: {
    size: textInputLabelVariantsSize
  },
  defaultVariants: {
    size: "sm"
  }
})

globalStyle(`${textInputLabelVariants.classNames.base} > span`, {
  marginRight: 5
})
