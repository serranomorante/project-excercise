import { recipe } from "@vanilla-extract/recipes";

export const modalVariants = recipe({
  base: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    visibility: 'hidden',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid black',
    padding: 20,
    borderRadius: 20
  },
  variants: {
    isOpen: {
      true: { visibility: 'visible' },
      false: {}
    },
    state: {
      default: {},
      error: { borderColor: 'red' },
      success: { borderColor: 'green' },
      info: { borderColor: 'blue' },
    }
  },
  defaultVariants: {
    state: 'default',
    isOpen: false
  }
});
