'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { bookService } from '@/services/bookService';
import { CreateBookActionReturn } from '@/types/action/book';
import { ApiResult } from '@/types/api/common';
import { BookSearchItem } from '@/types/domain/book';

import { getServerAuthData } from '../auth/server';
import { ApiError } from '../fetch/ApiError';
import { mapToCreateBookRequest } from '../mappers/bookMapper';

const requireAuth = async () => {
  const authData = await getServerAuthData();
  const accessToken = authData?.accessToken;

  if (!accessToken) {
    redirect('/login');
  }

  return { accessToken };
};

export const toggleBookCompleteAction = async (id: string): Promise<ApiResult> => {
  const { accessToken } = await requireAuth();

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

export const toggleBookFavoriteAction = async (id: string): Promise<ApiResult> => {
  const { accessToken } = await requireAuth();

  try {
    await bookService.toggleBookFavorite(id, accessToken);
    revalidatePath(`/book/${id}`);
    return { success: true };
  } catch (err) {
    return {
      success: false,
      error: err as ApiError,
    };
  }
};

export const createBookAction = async (book: BookSearchItem): Promise<CreateBookActionReturn> => {
  const { accessToken } = await requireAuth();

  try {
    const bookInfo = mapToCreateBookRequest(book);
    const { userBookId } = await bookService.create(bookInfo, accessToken);
    return { success: true, data: { id: userBookId } };
  } catch (err) {
    const apiError = err as ApiError;

    let parsedErr = null;
    try {
      parsedErr = JSON.parse(apiError.message);
      console.log(parsedErr);
    } catch {}

    return {
      success: false,
      error: {
        data: {
          message: parsedErr?.message || apiError.message,
          id: parsedErr?.userBookId,
        },
        status: apiError.status,
        name: apiError.name,
      },
    };
  }
};
