'use client';

import { useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';

interface Props {
  onSubmit?: (query: string) => void;
}

export const Search = ({ onSubmit }: Props) => {
  const [query, setQuery] = useState('');

  const sendQuery = () => {
    if (!query.trim()) return;
    onSubmit?.(query);
    setQuery('');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendQuery();
    }
    // @todo : 줄바꿈 (Shift + Enter) 처리할지
  };

  return (
    <div className="flex flex-1 gap-4 items-center border border-border rounded-full p-2 bg-bg-card shadow-default">
      <div className="w-fit">
        <Dropdown.Root defaultOption={{ label: 'ISBN ', value: 'isbn' }}>
          <Dropdown.Trigger />
          <Dropdown.Content gap={16}>
            <Dropdown.Item value="isbn">ISBN</Dropdown.Item>
            <Dropdown.Item value="title">제목</Dropdown.Item>
          </Dropdown.Content>
        </Dropdown.Root>
      </div>
      <div className="flex items-end gap-2 flex-1 ">
        <input
          className="text-sm leading-6 w-full mr-4 font-bold outline-none"
          placeholder="검색어를 입력하세요.."
          enterKeyHint="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
};
