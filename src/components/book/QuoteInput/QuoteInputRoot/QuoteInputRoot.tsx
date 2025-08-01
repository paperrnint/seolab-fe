'use client';

import { useState } from 'react';

import { QuoteInputContext } from '../@context/QuoteInputContext';

interface Props {
  children: React.ReactNode;
  initialPage?: string;
  initialText?: string;
  onSubmit?: (text: string, page?: number | null) => void | Promise<void>;
}

export const QuoteInputRoot = ({ children, initialPage = '', initialText = '', onSubmit }: Props) => {
  const [page, setPage] = useState(initialPage);
  const [text, setText] = useState(initialText);

  const reset = () => {
    setPage(initialPage);
    setText(initialText);
  };

  const submit = async () => {
    if (!text?.trim()) return;

    const pageNum = page.trim() === '' ? null : Number(page);
    reset();
    await onSubmit?.(text, pageNum);
  };

  return (
    <QuoteInputContext.Provider value={{ page, text, setPage, setText, submit, reset }}>
      {children}
    </QuoteInputContext.Provider>
  );
};
