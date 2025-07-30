'use client';

import { useError } from '@/hooks/useError';

import { ErrorModal } from '../ErrorModal/ErrorModal';

export const GlobalErrorModal = () => {
  const { error, resetError, clickModalButton } = useError();

  if (!error) {
    return null;
  }

  return (
    <ErrorModal
      errorType={error.errorType}
      errorStatusCode={error.statusCode}
      isOpen={true}
      onClickButton={clickModalButton}
      onCloseModal={resetError}
    />
  );
};
