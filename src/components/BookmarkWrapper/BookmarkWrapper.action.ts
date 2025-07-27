'use server';

import { redirect } from 'next/navigation';

import { getServerAuthData } from '@/lib/auth/server';
import { ApiError } from '@/lib/fetch/ApiError';
import { bookService } from '@/services/bookService';
import { ApiResult } from '@/types/api/common';

export const toggleBookFavoriteAction = async (id: string): Promise<ApiResult> => {
  const authData = await getServerAuthData();
  const accessToken = authData?.accessToken;

  if (!accessToken) {
    redirect('/login');
  }

  try {
    await bookService.toggleBookFavorite(id, accessToken);
    return { success: true };
  } catch (err) {
    return {
      success: false,
      error: err as ApiError,
    };
  }
};
