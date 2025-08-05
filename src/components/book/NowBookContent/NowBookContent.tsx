'use client';

import { FaCircleExclamation } from 'react-icons/fa6';
import { SwiperSlide } from 'swiper/react';

import { HoverSwiper } from '@/components/common/ui/Swiper/HoverSwiper';
import { Txt } from '@/components/common/ui/Txt/Txt';
import { Quote } from '@/types/domain/book';

import { BookCover } from '../BookCover/BookCover';
import { QuoteNote } from '../QuoteNote/QuoteNote';

interface Props {
  title: string;
  author: string;
  thumbnail: string;
  quotes: Quote[];
}

export const NowBookContent = ({ title, author, thumbnail, quotes }: Props) => {
  const hasQuotes = quotes.length > 0;
  return (
    <div className="flex mb-8 flex-col md:flex-row mr-0 md:-mr-4">
      <div className="mx-auto flex-shrink-0 px-4 py-8 md:p-0">
        <BookCover src={thumbnail} size="lg" hasShadow />
      </div>
      {hasQuotes ? (
        <div className="flex-1 overflow-hidden">
          <HoverSwiper>
            {quotes.map((quote) => (
              <SwiperSlide key={quote.id}>
                <QuoteNote line={4} text={quote.text} page={quote.page} bookTitle={title} author={author} />
              </SwiperSlide>
            ))}
          </HoverSwiper>
        </div>
      ) : (
        <div className="w-full flex flex-col justify-center items-center min-h-36 rounded-lg">
          <FaCircleExclamation className="text-subtle mb-2 text-lg" />
          <Txt variant="captionSm">아직 기록한 문장이 없어요</Txt>
          <Txt variant="captionSm">마음에 드는 문장을 기록해 보세요</Txt>
        </div>
      )}
    </div>
  );
};
