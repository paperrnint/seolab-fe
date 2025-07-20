'use client';

import { useState } from 'react';

import { useInfiniteBooks } from '@/hooks/react-query/useInfiniteBooks';
import { useIntersection } from '@/hooks/react-query/useIntersection';

import { BookItem } from '../BookItem/BookItem';
import { Button } from '../Button/Button';
import { ExternalGradient } from '../ExternalGradient/ExternalGradient';

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

  const books = data?.pages.flatMap((page) => page.books) ?? [];

  // 초기 화면
  if (!showAll) {
    return (
      <ExternalGradient height={120}>
        <div className="pb-4 flex justify-center">
          <Button variant="query" onClick={() => setShowAll(true)}>
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
        <BookItem
          key={`${book.isbn}-${i}`}
          title={book.title}
          authors={book.authors}
          description={book.contents}
          publishedDate={book.publishedDate}
          publisher={book.publisher}
          thumbnail={book.thumbnail}
        />
      ))}
      <div ref={targetRef} />
    </>
  );
};
