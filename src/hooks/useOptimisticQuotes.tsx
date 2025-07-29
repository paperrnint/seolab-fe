import { useCallback, useEffect, useState } from 'react';

import { createQuoteAction } from '@/lib/actions/book';
import { ApiError } from '@/lib/fetch/ApiError';
import { mapToQuote } from '@/lib/mappers/bookMapper';
import { Quote } from '@/types/domain/book';

interface Options {
  onError?: (error: ApiError) => void;
  onSuccess?: (quote: Quote) => void;
}

export const useOptimisticQuotes = (initialQuotes: Quote[], bookId?: string, options?: Options) => {
  const [quotes, setQuotes] = useState(initialQuotes);

  useEffect(() => {
    setQuotes(initialQuotes);
  }, [initialQuotes]);

  const addQuote = useCallback(
    async (text: string, page?: number | null) => {
      if (!bookId) {
        console.error('BookId가 없어서 quote를 추가할 수 없습니다.');
        return;
      }

      console.log('====서버에 전송');
      console.log(text, page);

      // optimistic update
      const timestamp = new Date().toISOString();
      const tempQuote: Quote = {
        id: `temp-${Date.now()}`,
        page: page ?? null,
        text,
        isFavorite: false,
        createdAt: timestamp,
        updatedAt: timestamp,
      };

      setQuotes((prev) => [...prev, tempQuote]);

      try {
        const result = await createQuoteAction(bookId, { page, text });

        if (result.success) {
          const quote = mapToQuote(result.data);
          setQuotes((prev) => prev.map((q) => (q.id === tempQuote.id ? quote : q))); // change to server data
          options?.onSuccess?.(quote);
        } else {
          setQuotes((prev) => prev.filter((q) => q.id !== tempQuote.id)); // remove temp quote
          options?.onError?.(result.error);
        }
      } catch (err) {
        setQuotes((prev) => prev.filter((q) => q.id !== tempQuote.id));
        options?.onError?.(err as ApiError);
      }
    },
    [bookId, options]
  );

  return {
    quotes,
    addQuote,
    setQuotes,
  };
};
