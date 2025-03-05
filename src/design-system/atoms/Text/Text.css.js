import { recipe } from "@vanilla-extract/recipes";

/**
 * @satisfies {Record<string, import('@vanilla-extract/css').ComplexStyleRule>}
 */
const textSize = {
  xs: { fontSize: 12 },
  sm: { fontSize: 14 },
  md: { fontSize: 16 },
  lg: { fontSize: 18 },
  xl: { fontSize: 26 },
}

/**
 * @satisfies {Record<string, import('@vanilla-extract/css').ComplexStyleRule>}
 */
const textWeight = {
  normal: {},
  bold: { fontWeight: 800 },
  semibold: { fontWeight: 600 }
}

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
