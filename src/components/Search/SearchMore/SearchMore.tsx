'use client';

import { useState } from 'react';

import { useInfiniteBooks } from '@/hooks/react-query/useInfiniteBooks';
import { useIntersection } from '@/hooks/react-query/useIntersection';
import { mapToBookSearchItem } from '@/lib/mappers/bookMapper';

import { BookItem } from '../../book/BookItem/BookItem';
import { ExternalGradient } from '../../common/effects/ExternalGradient/ExternalGradient';
import { Button } from '../../common/ui/Button/Button';

interface Props {
  query: string;
}

export const SearchMore = ({ query }: Props) => {
  const [showAll, setShowAll] = useState(false);
  const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteBooks(query);
  const targetRef = useIntersection({
    onIntersect: () => {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  const serverBooks = data?.pages.flatMap((page) => page.books) ?? [];
  const books = serverBooks.map(mapToBookSearchItem);

  // 초기 화면
  if (!showAll) {
    return (
      <ExternalGradient height={120}>
        <div className="pb-4 flex justify-center">
          <Button
            variant="secondary"
            size="xs"
            shape="circular"
            width="fit"
            align="center"
            outline={true}
            onClick={() => setShowAll(true)}
          >
            검색 결과 더보기
          </Button>
        </div>
      </ExternalGradient>
    );
  }

  // API 요청 중 에러 발생
  if (status === 'error') {
    console.error(error);
    return null;
  }

  // 정상 검색 결과
  return (
    <>
      {books.map((book, i) => (
        <BookItem key={`${book.isbn}-${i}`} book={book} />
      ))}
      <div ref={targetRef} />
    </>
  );
};
