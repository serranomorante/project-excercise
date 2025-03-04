'use client'

import * as React from 'react';
import { RequestLoanSuccessModalContext } from './RequestLoanSuccessModal.context';

export function useRequestLoanSuccessModal() {
  const context = React.useContext(RequestLoanSuccessModalContext);
  if (context === undefined) {
    throw new Error('useRequestLoanSuccessModal must be used within a RequestLoanSuccessModal');
  }
  return context;
}
