'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaCircleXmark, FaMagnifyingGlass } from 'react-icons/fa6';

interface Props {
  initialQuery?: string;
}

export const Search = ({ initialQuery = '' }: Props) => {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();
  const hasQuery = query.length >= 1;

  const resetQuery = () => {
    setQuery('');
  };

  const sendQuery = async () => {
    if (!query.trim()) return;
    router.push(`/search?q=${encodeURIComponent(query)}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (e.nativeEvent.isComposing) {
        return;
      }

      e.preventDefault();
      sendQuery();
    }
  };

  return (
    <div className="flex flex-1 gap-2 items-center border border-border rounded-xl py-2 px-3 bg-bg-card">
      <FaMagnifyingGlass className="ml-1 text-subtle opacity-40" />
      <div className="flex items-end gap-2 flex-1">
        <input
          className="text-sm leading-6 w-full font-bold outline-none"
          name="query"
          placeholder="책 제목, 작가, ISBN 등"
          enterKeyHint="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </div>
      {hasQuery && (
        <div>
          <button className="flex items-center text-subtle opacity-40 cursor-pointer" onClick={resetQuery}>
            <FaCircleXmark size={16} />
          </button>
        </div>
      )}
    </div>
  );
};
