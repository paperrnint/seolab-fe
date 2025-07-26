'use server';

import { redirect } from 'next/navigation';

import { getServerAuthData } from '@/lib/auth/server';
import { ApiError } from '@/lib/fetch/ApiError';
import { mapToCreateBookRequest } from '@/lib/mappers/bookMapper';
import { bookService } from '@/services/bookService';
import { BookSearchItem } from '@/types/domain/book';

type CreateBookActionReturn =
  | {
      success: true;
      data: {
        id: string;
      };
    }
  | {
      success: false;
      error: {
        data: {
          message: string;
          id: string;
        };
        status: number;
        name: string;
      };
    };

export const createBookAction = async (book: BookSearchItem): Promise<CreateBookActionReturn> => {
  const authData = await getServerAuthData();
  const accessToken = authData?.accessToken;

  if (!accessToken) {
    redirect('/login');
  }

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
