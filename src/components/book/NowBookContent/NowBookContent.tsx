'use client';

import { Quote } from '@/types/domain/book';

import { BookCover } from '../BookCover/BookCover';
import { QuoteNote } from '../QuoteNote/QuoteNote';

interface Props {
  thumbnail: string;
  quotes: Quote[];
}

export const NowBookContent = ({ thumbnail, quotes }: Props) => {
  return (
    <div className="flex mb-8 flex-col md:flex-row mr-0 md:-mr-4">
      <div className="mx-auto flex-shrink-0 px-4 py-8 md:p-0">
        <BookCover src={thumbnail} size="lg" hasShadow />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {quotes.map((quote, i) => (
          <QuoteNote key={i} text={quote.text} page={quote.page} />
        ))}
      </div>
    </div>
  );
};
