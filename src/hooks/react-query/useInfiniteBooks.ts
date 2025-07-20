import { useInfiniteQuery } from '@tanstack/react-query';

import { bookService } from '@/services/bookService';
import { SearchResponse } from '@/types/api/book';

import { useAuth } from '../auth/useAuth';

export const useInfiniteBooks = (query: string) => {
  const { accessToken } = useAuth();

  return useInfiniteQuery<SearchResponse>({
    queryKey: ['search', query],
    queryFn: ({ pageParam }) =>
      bookService.search(
        {
          query,
          page: pageParam as number,
          size: 20,
        },
        accessToken || ''
      ),
    initialPageParam: 2,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.isEnd) {
        return undefined;
      }
      return allPages.length + 1;
    },
    enabled: !!query && !!accessToken,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
