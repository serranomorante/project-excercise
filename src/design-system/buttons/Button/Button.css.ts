import { ComplexStyleRule } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const buttonSize = {
  xs: { fontSize: 12, borderRadius: 18, height: 38, padding: '0px 22px' },
  sm: { fontSize: 14, borderRadius: 22, height: 42, padding: '0px 22px' },
  md: { fontSize: 16, borderRadius: 26, height: 46, padding: '0px 22px'  },
  lg: { fontSize: 18, borderRadius: 30, height: 50, padding: '0px 22px'  },
} satisfies Record<string, ComplexStyleRule>

const buttonColorSchema = {
  primary: {
    backgroundColor: 'black',
    selectors: {
      '&:hover': { backgroundColor: '#3b3b3b' }
    }
  }
} satisfies Record<string, ComplexStyleRule>

export const buttonVariants = recipe({
  base: {
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  variants: {
    size: buttonSize,
    colorSchema: buttonColorSchema,
    disabled: {
      true: {
        cursor: 'not-allowed',
        pointerEvents: 'none'
      },
      false: {}
    },
    fullWidth: {
      true: {
        width: '100%',
      },
      false: {}
    }
  },
  defaultVariants: {
    size: "sm",
    colorSchema: "primary"
  }
})
