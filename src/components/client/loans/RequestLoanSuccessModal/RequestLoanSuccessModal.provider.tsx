'use client'

import * as React from 'react';
import { RequestLoanSuccessModalContext } from './RequestLoanSuccessModal.context';
import { IRequestLoanSuccessModalProviderProps } from './RequestLoanSuccessModal.types';

export function RequestLoanSuccessModalProvider({ children }: IRequestLoanSuccessModalProviderProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [content, setContent] = React.useState<React.ReactNode>(null);

  function openModal(modalContent: React.ReactNode) {
    setContent(modalContent);
    setIsOpen(true);
  }

  function closeModal() {
    setContent(null);
    setIsOpen(false);
  }

  return (
    <RequestLoanSuccessModalContext.Provider value={{ isOpen, content, openModal, closeModal }}>
      {children}
      {isOpen && (
        <div className="modal-backdrop">
          <div className="modal-content">{content}</div>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </RequestLoanSuccessModalContext.Provider>
  );
}
