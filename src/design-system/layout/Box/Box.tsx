import * as React from 'react';
import { IBoxProps } from './Box.types';
import { boxChild, boxVariants } from './Box.css';

function BoxBase(props: IBoxProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { children, variant, container, ...rest } = props;

  return (
    <div ref={ref} className={boxVariants({ variant, container })} {...rest}>
      <div className={boxChild}>
        {children}
      </div>
    </div>
  );
}

export const Box = React.forwardRef(BoxBase);
