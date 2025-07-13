import { useState } from 'react';

import { ErrorType } from '@/components/ErrorModal/ErrorModal.constant';

export const useErrorModal = () => {
  const [errorType, setErrorType] = useState<ErrorType | null>(null);
  const isOpen = !!errorType;

  const showError = (type: ErrorType) => {
    setErrorType(type);
  };

  const resetError = () => {
    setErrorType(null);
  };

  return {
    errorType,
    isOpen,
    showError,
    resetError,
  };
};
