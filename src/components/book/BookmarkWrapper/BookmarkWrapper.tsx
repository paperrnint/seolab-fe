'use client';

import { FaBookmark } from 'react-icons/fa6';

import { ErrorModal } from '@/components/modal/ErrorModal/ErrorModal';
import { useErrorModal } from '@/hooks/auth';
import { useBookFavorite } from '@/hooks/useOptimisticUpdate';

interface Props {
  children: React.ReactNode;
  id: string;
  initialValue?: boolean;
  readOnly?: boolean;
}

export const BookmarkWrapper = ({ children, id, initialValue, readOnly = true }: Props) => {
  const { errorStatusCode, isOpen, showError, resetError } = useErrorModal();
  const { state: isFavorite, toggle } = useBookFavorite(id, initialValue || false, {
    onError: (error) => showError(error.status),
  });

  return (
    <>
      <button
        className={`
        relative flex flex-shrink-0 h-fit 
        ${readOnly ? '' : 'cursor-pointer'}
        focus:outline-none 
      `}
        disabled={readOnly}
        onClick={toggle}
      >
        {children}
        {isFavorite && (
          <div className="absolute top-0 left-0 px-1">
            <FaBookmark className="text-emp" />
          </div>
        )}
      </button>

      {errorStatusCode && (
        <ErrorModal
          errorType="createBooks"
          errorStatusCode={errorStatusCode}
          isOpen={isOpen}
          onClickButton={resetError}
          onCloseModal={resetError}
        />
      )}
    </>
  );
};
