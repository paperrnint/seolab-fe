'use client';

import { useEffect, useState } from 'react';
import { FaBookmark } from 'react-icons/fa6';

import { toggleBookFavoriteAction } from '@/lib/actions/book';

interface Props {
  children: React.ReactNode;
  id: string;
  initialValue?: boolean;
  readOnly?: boolean;
}

export const BookmarkWrapper = ({ children, id, initialValue, readOnly = true }: Props) => {
  const [isFavorite, setIsFavorite] = useState(initialValue || false);

  useEffect(() => {
    setIsFavorite(initialValue || false);
  }, [initialValue]);

  const toggle = async () => {
    setIsFavorite((prev) => !prev);
    // @todo: send to server
    const result = await toggleBookFavoriteAction(id);
    if (!result.success) {
      setIsFavorite((prev) => !prev); // UI 업데이트 취소
      console.error(result.error);
    }
  };

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
