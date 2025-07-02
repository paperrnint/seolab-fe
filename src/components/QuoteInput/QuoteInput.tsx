'use client';

import { useState } from 'react';

interface Props {
  line?: number;
  onSubmit?: (page: string, quote: string) => void;
}

export const QuoteInput = ({ line = 2, onSubmit }: Props) => {
  const [page, setPage] = useState(''); // @todo: validation
  const [quote, setQuote] = useState('');

  const saveQuote = () => {
    if (page.trim() || quote.trim()) return;
    onSubmit?.(page, quote);
    setPage('');
    setQuote('');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      saveQuote();
    }
    // @todo : 줄바꿈 (Shift + Enter) 처리할지
  };

  return (
    <div className="flex flex-1 gap-4 items-start border border-border rounded-lg p-4 bg-bg-card">
      <div className="w-fit">
        <input
          className="w-10 outline-none text-sm leading-6"
          placeholder="페이지"
          enterKeyHint="next"
          value={page}
          onChange={(e) => setPage(e.target.value)}
        />
      </div>
      <div className="flex items-end gap-4 border-l border-l-border pl-4 flex-1 ">
        <textarea
          className="outline-none resize-none text-sm leading-6 w-full"
          rows={line}
          placeholder="기록할 문장을 작성하세요.."
          enterKeyHint="send"
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
};
