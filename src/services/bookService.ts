import { fetchData } from '@/lib/fetch/fetchData';
import { BookSearchRequest, BookSearchResponse, CreateBookRequest, CreateBookResponse } from '@/types/api/book';
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

const create = async (bookInfo: CreateBookRequest, accessToken: string) => {
  return fetchData<CreateBookResponse>('/api/books', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(bookInfo),
  });
};

export const bookService = {
  search,
  create,
};
