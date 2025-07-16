import { useState } from 'react';

export const useErrorModal = () => {
  const [errorStatusCode, setErrorCode] = useState<number | null>(null);
  const isOpen = !!errorStatusCode;

  const showError = (errorStatusCode: number) => {
    setErrorCode(errorStatusCode);
  };

  const resetError = () => {
    setErrorCode(null);
  };

  return {
    errorStatusCode,
    isOpen,
    showError,
    resetError,
  };
};
