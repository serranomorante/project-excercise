import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

/**
 * @satisfies {Partial<Record<import("react").HTMLInputTypeAttribute, import('@vanilla-extract/css').ComplexStyleRule>>}
 */
const textInputTypes = {
  hidden: {
    display: 'none'
  }
}

/**
 * @satisfies {Record<string, import('@vanilla-extract/css').ComplexStyleRule>}
 */
const textInputSize = {
  xs: { fontSize: 12 },
  sm: { fontSize: 14, height: 25 },
  md: { fontSize: 16 },
  lg: { fontSize: 18 },
}

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
    readOnly: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none',
        backgroundColor: '#f0f0f0'
      },
      false: {}
    },
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
    },
    InputRightAddon: {
      true: {
        paddingRight: 30
      },
      false: {}
    }
  },
  defaultVariants: {
    size: 'sm',
  }
})

export const main = recipe({
  base: {
    display: 'flex',
    position: 'relative',
  },
  variants: {
    type: /** @type {Record<import("react").HTMLInputTypeAttribute, import('@vanilla-extract/css').ComplexStyleRule>} */ (textInputTypes)
  }
})

export const inputLeftAddon = style({
  position: 'absolute',
  top: 11.2,
  left: 7
})

export const inputRightAddon = style({
  position: 'absolute',
  top: 11.2,
  right: 7
})
