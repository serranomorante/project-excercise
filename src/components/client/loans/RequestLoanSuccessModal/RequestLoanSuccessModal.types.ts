export interface IRequestLoanSuccessModalContext {
  isOpen: boolean;
  content: React.ReactNode;
  openModal: (modalContent: React.ReactNode) => void;
  closeModal: () => void;
}

export interface IRequestLoanSuccessModalProviderProps {
  children: React.ReactNode | React.ReactNode[];
}
