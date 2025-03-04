import * as React from 'react';
import { IModalProps } from './Modal.types';
import { modalVariants } from './Modal.css';

function ModalBase(props: IModalProps, ref: React.ForwardedRef<HTMLDivElement>) {
  const { children, state, isOpen, onClose, ...rest } = props;

  return (
    <div ref={ref} className={modalVariants({ state, isOpen })} {...rest}>
      <div className="modal-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export const Modal = React.forwardRef(ModalBase);
