import { ComplexStyleRule, globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const textInputSize = {
  xs: { fontSize: 12 },
  sm: { fontSize: 14, height: 25 },
  md: { fontSize: 16 },
  lg: { fontSize: 18 },
} satisfies Record<string, ComplexStyleRule>

export const textInputVariants = recipe({
  base: {
    borderRadius: 5,
    borderWidth: 0.8,
    borderColor: 'grey',
    borderStyle: 'solid',
    padding: '5px 12px'
  },
  variants: {
    size: textInputSize,
    fullWidth: {
      true: {
        width: '100%'
      },
      false: {}
    },
    InputLeftAddon: {
      true: {
        paddingLeft: 30
      },
      false: {}
    }
  },
  defaultVariants: {
    size: 'sm',
  }
})

export const main = style({
  display: 'flex',
  position: 'relative',
})

export const inputLeftAddon = style({
  position: 'absolute',
  top: 11.2,
  left: 7
})
