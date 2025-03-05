import { style } from "@vanilla-extract/css";

export const main = style({
  display: 'grid',
  gap: 20,
  gridTemplateColumns: 'repeat(2, 1fr)',
  '@media': {
    '(max-width: 764px)': {
      gridTemplateColumns: '1fr',
    },
  },
})

export const checkboxMain = style({
  display: 'flex',
  alignItems: 'center'
})
