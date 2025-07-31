'use client';

import { createContext, useContext } from 'react';

interface QuoteInputContextValue {
  page: string;
  text: string;
  setPage: (page: string) => void;
  setText: (text: string) => void;
  submit: () => void;
  reset: () => void;
}

export const QuoteInputContext = createContext<QuoteInputContextValue | null>(null);

export const useQuoteInput = () => {
  const context = useContext(QuoteInputContext);
  if (!context) {
    throw new Error('QuoteInput components must be used within QuoteInput.Root');
  }
  return context;
};
