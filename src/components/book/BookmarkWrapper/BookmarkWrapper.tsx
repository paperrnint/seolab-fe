'use client';

import { FaBookmark } from 'react-icons/fa6';

import { useBookFavorite } from '@/hooks/useOptimisticUpdate';

interface Props {
  children: React.ReactNode;
  id: string;
  initialValue?: boolean;
  readOnly?: boolean;
}

export const BookmarkWrapper = ({ children, id, initialValue, readOnly = true }: Props) => {
  const { state: isFavorite, toggle } = useBookFavorite(id, initialValue || false, {
    onError: (err) => console.error(err),
  });

  return (
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
  );
};
