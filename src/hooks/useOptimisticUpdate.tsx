import { useEffect, useState } from 'react';

import { toggleBookCompleteAction, toggleBookFavoriteAction } from '@/lib/actions/book';
import { ApiError } from '@/lib/fetch/ApiError';
import { ApiResult } from '@/types/api/common';

type AsyncAction = (id: string) => Promise<ApiResult>;

interface Options {
  onError?: (error: ApiError) => void;
}

export const useOptimisticUpdate = (initialValue: boolean, action: AsyncAction, id: string, options?: Options) => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    setState(initialValue);
  }, [initialValue]);

  const toggle = async () => {
    setState((prev) => !prev); // optimistic update

    try {
      const result = await action(id);

      if (!result.success) {
        setState((prev) => !prev); // 원상복구
        options?.onError?.(result.error);
      }
    } catch (err) {
      setState((prev) => !prev);
      options?.onError?.(err as ApiError);
    }
  };

  // @todo: other functions

  return { state, toggle };
};

export const useBookFavorite = (id: string, initialValue: boolean, options?: Options) => {
  return useOptimisticUpdate(initialValue, toggleBookFavoriteAction, id, options);
};

export const useBookComplete = (id: string, initialValue: boolean, options?: Options) => {
  return useOptimisticUpdate(initialValue, toggleBookCompleteAction, id, options);
};
