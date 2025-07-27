'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { getServerAuthData } from '@/lib/auth/server';
import { ApiError } from '@/lib/fetch/ApiError';
import { bookService } from '@/services/bookService';
import { ApiResult } from '@/types/api/common';

export const toggleBookCompleteAction = async (id: string): Promise<ApiResult> => {
  const authData = await getServerAuthData();
  const accessToken = authData?.accessToken;

  if (!accessToken) {
    redirect('/login');
  }

  try {
    await bookService.toggleBookComplete(id, accessToken);
    revalidatePath(`/book/${id}`);
    return { success: true };
  } catch (err) {
    return {
      success: false,
      error: err as ApiError,
    };
  }
};
