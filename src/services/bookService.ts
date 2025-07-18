import { fetchData } from '@/lib/fetch/fetchData';
import { SearchRequest, SearchResponse } from '@/types/api/book';
import { createSearchParams } from '@/utils';

const search = async ({ query, page, size }: SearchRequest, accessToken: string) => {
  const params = createSearchParams({
    query,
    page,
    size,
  });

  return fetchData<SearchResponse>(`/api/books/search?${params.toString()}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const bookService = {
  search,
};
