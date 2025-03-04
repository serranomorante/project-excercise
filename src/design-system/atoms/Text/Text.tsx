import * as React from 'react';
import { ITextProps } from "./Text.types";
import { textVariants } from './Text.css';

function TextBase(props: ITextProps, ref: React.ForwardedRef<HTMLParagraphElement>) {
  const { children, size, weight, ...rest } = props;

  return (
    <p ref={ref} className={textVariants({ size, weight })} {...rest}>
      {children}
    </p>
  );
}

export const Text = React.forwardRef(TextBase);
