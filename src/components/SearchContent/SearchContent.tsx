import { ApiError } from '@/lib/fetch/ApiError';
import { SearchBook } from '@/types/api/book';

import { BookItem } from '../BookItem/BookItem';
import { SearchEmpty } from '../SearchEmpty/SearchEmpty';
import { SearchError } from '../SearchError/SearchError';
import { SearchSupport } from '../SearchSupport/SearchSupport';

interface Props {
  query: string;
  error: ApiError | null;
  books: SearchBook[];
}

export const SearchContent = ({ query, error, books }: Props) => {
  // 쿼리 없음
  if (!query) {
    return <SearchSupport />;
  }

  // 쿼리 있음, 검색 시 에러 발생
  if (error) {
    return <SearchError errorStatusCode={error.status} />;
  }

  // 쿼리 있음, 검색 결과 없음
  if (books.length === 0) {
    return <SearchEmpty query={query} />;
  }

  // 정상적인 검색 결과
  return (
    <>
      {books?.map((book) => (
        <BookItem
          key={book.isbn}
          title={book.title}
          authors={book.authors}
          description={book.contents}
          publishedDate={book.publishedDate}
          publisher={book.publisher}
          thumbnail={book.thumbnail}
        />
      ))}
    </>
  );
};
