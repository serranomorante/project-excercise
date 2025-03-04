import * as React from 'react';
import { IBoxProps } from './Box.types';
import { boxVariants } from './Box.css';

function BoxBase(props: IBoxProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { children, variant, container, ...rest } = props;

  return (
    <div ref={ref} className={boxVariants({ variant, container })} {...rest}>
      <div>
        {children}
      </div>
    </div>
  );
}

export const Box = React.forwardRef(BoxBase);
