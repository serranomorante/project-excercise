/**
 * @import { ComplexStyleRule } from '@vanilla-extract/css'
 */
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

/**
 * @satisfies {Record<string, ComplexStyleRule>}
 */
const textInputLabelVariantsSize = {
  xs: { fontSize: 12, },
  sm: { fontSize: 14, },
  md: { fontSize: 16, },
  lg: { fontSize: 18, },
}

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

export const labelTextMain = style({
  selectors: {
    [`${textInputLabelVariants.classNames.base} &`]: {
      marginRight: 5
    },
    [`${textInputLabelVariants.classNames.variants.size.xs} &`]: {
      fontSize: 12
    },
    [`${textInputLabelVariants.classNames.variants.size.sm} &`]: {
      fontSize: 14
    },
    [`${textInputLabelVariants.classNames.variants.size.md} &`]: {
      fontSize: 14
    },
    [`${textInputLabelVariants.classNames.variants.size.lg} &`]: {
      fontSize: 18
    }
  }
})
