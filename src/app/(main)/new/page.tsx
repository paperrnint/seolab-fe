'use client';

import { useState } from 'react';

import { BookItem } from '@/components/BookItem/BookItem';
import { Search } from '@/components/Search/Search';
import { useAuth } from '@/hooks/auth/useAuth';
import { ApiError } from '@/lib/fetch/ApiError';
import { bookService } from '@/services/bookService';
import { SearchBook } from '@/types/api/book';
import { ApiResult } from '@/types/api/result';

export default function NewPage() {
  const [books, setBooks] = useState<SearchBook[]>();
  const { accessToken } = useAuth();

  const onSubmit: (query: string) => Promise<ApiResult> = async (query: string) => {
    if (!accessToken) {
      return {
        success: false,
        error: new ApiError('검색하려면 로그인해주세요', 401),
      };
    }

    try {
      const result = await bookService.search({ query }, accessToken);
      setBooks(result.books);
      return { success: true };
    } catch (err) {
      console.error(err);
      return { success: false, error: err as ApiError };
    }
  };

  return (
    <div className="w-full max-w-4xl">
      <div className="p-2">
        <div>
          <Search onSubmit={onSubmit} />
        </div>

        <div className="py-4">
          {/* Empty */}

          {/* Search */}
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
        </div>
      </div>
    </div>
  );
}
