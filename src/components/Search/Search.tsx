'use client';

import { useState } from 'react';

import { DropdownOption } from '@/types';

import { Dropdown } from '../Dropdown/Dropdown';

interface Props {
  onSubmit?: (query: string) => void;
}

export const Search = ({ onSubmit }: Props) => {
  const [query, setQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState<DropdownOption>({ label: 'ISBN', value: 'isbn' });

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
        <Dropdown.Root>
          <Dropdown.SelectTrigger selectedLabel={selectedOption?.label} />
          <Dropdown.Content gap={16}>
            <Dropdown.SelectableItem value="isbn" onSelect={(option) => setSelectedOption(option)}>
              ISBN
            </Dropdown.SelectableItem>
            <Dropdown.SelectableItem value="title" onSelect={(option) => setSelectedOption(option)}>
              제목
            </Dropdown.SelectableItem>
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
