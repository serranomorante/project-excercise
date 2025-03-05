import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const boxVariants = recipe({
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
      flex: '1 0 auto',
      alignSelf: 'stretch',
      padding: 30,
      '@media': {
        'screen and (min-width: 640px)': {
          maxWidth: '640px',
        },
        'screen and (min-width: 768px)': {
          maxWidth: '768px',
          padding: 40,
        },
        'screen and (min-width: 1024px)': {
          maxWidth: '768px',
          padding: 40,
        },
        'screen and (min-width: 1280px)': {
          maxWidth: '768px',
          padding: 40,
        },
        'screen and (min-width: 1536px)': {
          maxWidth: '768px',
          padding: 40,
        },
      }
    }
  }
})
