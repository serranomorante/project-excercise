import * as React from 'react';
import { textVariants } from './Text.css';

/**
 * @param {import('./Text.types').ITextProps} props
 * @param {import('react').ForwardedRef<HTMLParagraphElement>} ref
 */
function TextBase(props, ref) {
  const { children, size, weight, ...rest } = props;

  return (
    <p ref={ref} className={textVariants({ size, weight })} {...rest}>
      {children}
    </p>
  );
}

export const Text = React.forwardRef(TextBase);
