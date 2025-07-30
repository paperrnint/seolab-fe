'use client';

import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

import { ErrorModal } from '@/components/modal/ErrorModal/ErrorModal';
import { useErrorModal } from '@/hooks/auth';
import { useBookMode } from '@/hooks/useBookMode';
import { useOptimisticQuotes } from '@/hooks/useOptimisticQuotes';
import { useShowQuotePage } from '@/hooks/useShowQuotePage';
import { ApiError } from '@/lib/fetch/ApiError';
import { BookDetailItem, Quote } from '@/types/domain/book';

import { ExternalGradient } from '../../common/effects/ExternalGradient/ExternalGradient';
import { BookHeader } from '../BookHeader/BookHeader';
import { QuoteInput } from '../QuoteInput/QuoteInput';
import { QuoteText } from '../QuoteText/QuoteText';

interface Props {
  book: BookDetailItem | null;
  initialQuotes: Quote[];
  error?: ApiError | null;
}

export const BookDetail = ({ book, initialQuotes, error }: Props) => {
  const { isEditMode } = useBookMode();
  const { showQuotePage } = useShowQuotePage();
  const { errorStatusCode, isOpen, showError, resetError } = useErrorModal();

  const { quotes, addQuote } = useOptimisticQuotes(initialQuotes, book?.id, {
    onError: (error) => {
      console.error(error);
    },
  });

  const bottomRef = useRef<HTMLDivElement>(null);
  const prevQuotesLen = useRef(quotes.length);
  const router = useRouter();

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, []);

  const onClickModalButton = () => {
    if (error?.status === 401) {
      resetError();
      router.push('/login');
    } else {
      resetError();
    }
  };

  useEffect(() => {
    // prevent scroll on initial mount
    if (quotes.length > prevQuotesLen.current) {
      scrollToBottom();
    }

    prevQuotesLen.current = quotes.length;
  }, [quotes.length, scrollToBottom]);

  useEffect(() => {
    if (error) {
      showError(error.status);
    }
  }, [error, showError]);

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

      {errorStatusCode && (
        <ErrorModal
          errorType="createQuotes"
          errorStatusCode={errorStatusCode}
          isOpen={isOpen}
          onClickButton={onClickModalButton}
          onCloseModal={resetError}
        />
      )}
    </div>
  );
};
