'use client';

import { useCallback, useEffect, useRef } from 'react';

import { useBookMode } from '@/hooks/useBookMode';
import { useOptimisticQuotes } from '@/hooks/useOptimisticQuotes';
import { useShowQuotePage } from '@/hooks/useShowQuotePage';
import { BookDetailItem, Quote } from '@/types/domain/book';

import { ExternalGradient } from '../../common/effects/ExternalGradient/ExternalGradient';
import { BookHeader } from '../BookHeader/BookHeader';
import { QuoteInput } from '../QuoteInput/QuoteInput';
import { QuoteText } from '../QuoteText/QuoteText';

interface Props {
  book: BookDetailItem | null;
  initialQuotes: Quote[];
}

export const BookDetail = ({ book, initialQuotes }: Props) => {
  const { isEditMode } = useBookMode();
  const { showQuotePage } = useShowQuotePage();

  const { quotes, addQuote } = useOptimisticQuotes(initialQuotes, book?.id, {
    onError: (error) => {
      console.error(error);
    },
  });

  const bottomRef = useRef<HTMLDivElement>(null);
  const prevQuotesLen = useRef(quotes.length);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, []);

  useEffect(() => {
    // prevent scroll on initial mount
    if (quotes.length > prevQuotesLen.current) {
      scrollToBottom();
    }

    prevQuotesLen.current = quotes.length;
  }, [quotes.length, scrollToBottom]);

  if (!book) return null;

  return (
    <div className="w-full flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="w-full max-w-4xl mx-auto">
          <BookHeader
            id={book.id}
            author={book.author}
            count={book.quoteCount}
            publishedDate={book.publishedDate}
            publisher={book.publisher}
            startAt={book.startDate}
            endAt={book.endDate}
            thumbnail={book.thumbnail}
            title={book.title}
            isFavorite={book.isFavorite}
            isReading={book.isReading}
          />

          <div className="p-2 pb-6 max-w-4xl">
            {quotes.map((quote) => (
              // edit mode 에선 항상 페이지 보여줘야 함
              <QuoteText key={quote.id} page={quote.page} text={quote.text} showPage={isEditMode || showQuotePage} />
            ))}
          </div>
          <div ref={bottomRef} />
        </div>
      </div>

      {isEditMode && (
        <div className="w-full max-w-4xl mx-auto px-2 pb-2">
          <ExternalGradient variant="top" height={48}>
            <QuoteInput onSubmit={addQuote} />
          </ExternalGradient>
        </div>
      )}
    </div>
  );
};
