import { recipe } from "@vanilla-extract/recipes";

export const toastVariants = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    position: 'fixed',
    top: '5%',
    right: '5%',
    border: 'none',
    padding: '5px 30px',
    borderRadius: 10,
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1);',
  },
  variants: {
    state: {
      default: { backgroundColor: 'grey' },
      error: { backgroundColor: '#ff8e8e' },
      success: {
        backgroundColor: '#79df79',
      },
      info: { backgroundColor: 'blue' },
    }
  },
  defaultVariants: {
    state: 'error',
  }
});
