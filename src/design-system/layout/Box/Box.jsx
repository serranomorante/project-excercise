import * as React from 'react';
import { boxChild, boxVariants } from './Box.css';

/**
 * @param {import('./Box.types').IBoxProps} props
 * @param {import('react').ForwardedRef<HTMLDivElement>} ref
 */
function BoxBase(props, ref) {
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
