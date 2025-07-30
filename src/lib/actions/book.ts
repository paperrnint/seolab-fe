'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { bookService } from '@/services/bookService';
import { CreateBookResult, CreateQuoteResult, VoidResult } from '@/types/action/book';
import { CreateBookErrorResponse, CreateQuoteRequest } from '@/types/api/book';
import { BookSearchItem } from '@/types/domain/book';

import { getServerAuthData } from '../auth/server';
import { ApiError } from '../fetch/ApiError';
import { mapToServerActionResult } from '../mappers/apiResultMapper';
import { mapToCreateBookRequest } from '../mappers/bookMapper';

const requireAuth = async () => {
  const authData = await getServerAuthData();
  const accessToken = authData?.accessToken;

  if (!accessToken) {
    redirect('/login');
  }

  return { accessToken };
};

export const toggleBookCompleteAction = async (id: string): Promise<VoidResult> => {
  const { accessToken } = await requireAuth();

  try {
    await bookService.toggleBookComplete(id, accessToken);
    revalidatePath(`/book/${id}`);
    return { success: true };
  } catch (err) {
    const error = mapToServerActionResult(err as ApiError);
    return {
      success: false,
      error,
    };
  }
};

export const toggleBookFavoriteAction = async (id: string): Promise<VoidResult> => {
  const { accessToken } = await requireAuth();

  try {
    await bookService.toggleBookFavorite(id, accessToken);
    revalidatePath(`/book/${id}`);
    return { success: true };
  } catch (err) {
    const error = mapToServerActionResult(err as ApiError);
    return {
      success: false,
      error,
    };
  }
};

export const createBookAction = async (book: BookSearchItem): Promise<CreateBookResult> => {
  const { accessToken } = await requireAuth();

  try {
    const bookInfo = mapToCreateBookRequest(book);
    const { userBookId } = await bookService.create(bookInfo, accessToken);
    return { success: true, data: { userBookId } };
  } catch (err) {
    const error = mapToServerActionResult<CreateBookErrorResponse>(err as ApiError);

    return {
      success: false,
      error,
    };
  }
};

export const createQuoteAction = async (id: string, quote: CreateQuoteRequest): Promise<CreateQuoteResult> => {
  const { accessToken } = await requireAuth();

  try {
    const data = await bookService.createQuote(quote, id, accessToken);
    return { success: true, data };
  } catch (err) {
    const error = mapToServerActionResult(err as ApiError);
    return {
      success: false,
      error,
    };
  }
};
