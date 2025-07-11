'use client';

import { useState } from 'react';
import { FaBookmark } from 'react-icons/fa6';

interface Props {
  children: React.ReactNode;
  initialValue?: boolean;
  readOnly?: boolean;
}

export const BookmarkWrapper = ({ children, initialValue, readOnly = true }: Props) => {
  const [isFavorite, setIsFavorite] = useState(initialValue || false);

  const toggle = () => {
    setIsFavorite((prev) => !prev);
    // @todo: send to server
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
