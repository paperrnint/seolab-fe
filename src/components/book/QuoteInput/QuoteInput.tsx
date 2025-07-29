'use client';

import { useState } from 'react';

interface Props {
  line?: number;
  onSubmit?: (text: string, page?: number | null) => void;
}

export const QuoteInput = ({ line = 2, onSubmit }: Props) => {
  const [page, setPage] = useState(''); // @todo: validation
  const [text, setText] = useState('');

  const resetInput = () => {
    setPage('');
    setText('');
  };

  const saveQuote = async () => {
    if (!text.trim()) return;

    const pageNum = page.trim() === '' ? null : Number(page);
    onSubmit?.(text, pageNum);
    resetInput();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (e.nativeEvent.isComposing) {
        return;
      }

      e.preventDefault();
      saveQuote();
    }
    // @todo : 줄바꿈 (Shift + Enter) 처리할지
  };

  const onChangePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 숫자만 입력 가능하도록 필터링
    if (value === '' || /^\d+$/.test(value)) {
      setPage(value);
    }
  };

  return (
    <div className="flex flex-1 gap-4 items-start border border-border rounded-lg p-4 bg-bg-card">
      <div className="w-fit">
        <input
          className="w-8 outline-none text-sm leading-6 placeholder:text-[12px]"
          placeholder="페이지"
          enterKeyHint="next"
          value={page}
          onChange={onChangePage}
          onKeyDown={onKeyDown}
        />
      </div>
      <div className="flex items-end gap-4 border-l border-l-border pl-4 flex-1 ">
        <textarea
          className="outline-none resize-none text-sm leading-6 w-full"
          rows={line}
          placeholder="기록할 문장을 작성하세요.."
          enterKeyHint="send"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
};
