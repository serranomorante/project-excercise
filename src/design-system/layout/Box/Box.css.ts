import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const boxVariants = recipe({
  base: {
    padding: 40
  },
  variants: {
    variant: {
      default: {},
      highlighted: {},
      bordered: { borderStyle: 'solid', borderWidth: 0.8, borderColor: '#c7c7c7', borderRadius: 12 },
    },
    container: {
      true: {
        display: 'flex',
        justifyContent: 'center',
      },
      false: {}
    }
  },
  defaultVariants: {
    variant: 'default',
    container: false
  },
});

export const boxChild = style({
  selectors: {
    [`${boxVariants.classNames.variants.container.true} &`]: {
      '@media': {
        'screen and (min-width: 640px)': {
          maxWidth: '640px',
        },
        'screen and (min-width: 768px)': {
          maxWidth: '768px',
        },
        'screen and (min-width: 1024px)': {
          maxWidth: '1024px',
        },
        'screen and (min-width: 1280px)': {
          maxWidth: '1280px',
        },
        'screen and (min-width: 1536px)': {
          maxWidth: '1536px',
        },
      }
    }
  }
})
