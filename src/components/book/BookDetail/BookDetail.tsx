'use client';

import { useBookMode } from '@/hooks/useBookMode';
import { useShowQuotePage } from '@/hooks/useShowQuotePage';
import { BookDetailItem, Quote } from '@/types/domain/book';

import { ExternalGradient } from '../../common/effects/ExternalGradient/ExternalGradient';
import { BookHeader } from '../BookHeader/BookHeader';
import { QuoteInput } from '../QuoteInput/QuoteInput';
import { QuoteText } from '../QuoteText/QuoteText';

interface Props {
  book: BookDetailItem | null;
  quotes: Quote[];
}

export const BookDetail = ({ book, quotes }: Props) => {
  const { isEditMode } = useBookMode();
  const { showQuotePage } = useShowQuotePage();

  if (!book) return null;

  return (
    <div className="w-full flex flex-col">
      <div className="flex-1 overflow-y-auto">
        <div className="w-full max-w-4xl mx-auto">
          <BookHeader
            id={book.id}
            author={book.author}
            count={0} // @todo: change to quoteCount
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
            {quotes.map((quote, i) => (
              // edit mode 에선 항상 페이지 보여줘야 함
              <QuoteText key={i} page={quote.page} quote={quote.quote} showPage={isEditMode || showQuotePage} />
            ))}
          </div>
        </div>
      </div>

      {isEditMode && (
        <div className="w-full max-w-4xl mx-auto px-2 pb-2">
          <ExternalGradient variant="top" height={48}>
            <QuoteInput />
          </ExternalGradient>
        </div>
      )}
    </div>
  );
};
