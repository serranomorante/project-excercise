'use client'

import * as React from 'react';
import { IRequestLoanSuccessModalContext } from './RequestLoanSuccessModal.types';

export const RequestLoanSuccessModalContext = React.createContext<IRequestLoanSuccessModalContext | undefined>(undefined);
