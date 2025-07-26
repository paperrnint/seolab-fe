import { fetchData } from '@/lib/fetch/fetchData';
import { BookSearchRequest, BookSearchResponse } from '@/types/api/book';
import { createSearchParams } from '@/utils';

const search = async ({ query, page, size }: BookSearchRequest, accessToken: string) => {
  const params = createSearchParams({
    query,
    page,
    size,
  });
  return fetchData<BookSearchResponse>(`/api/books/search?${params.toString()}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const bookService = {
  search,
};
