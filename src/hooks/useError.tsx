import { useAtom } from 'jotai';

import { errorAtom } from '@/atoms/errorAtom';
import { ErrorType } from '@/constants';

export const useError = () => {
  const [error, setError] = useAtom(errorAtom);

  const showError = (errorType: ErrorType, statusCode: number, onAction?: () => void) => {
    setError({ errorType, statusCode, customAction: onAction });
  };

  const resetError = () => {
    setError(null);
  };

  const clickModalButton = () => {
    setError(null);
    if (error?.customAction) {
      error.customAction();
    }
  };

  return { error, showError, resetError, clickModalButton };
};
