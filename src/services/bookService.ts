import { fetchData } from '@/lib/fetch/fetchData';
import {
  BookSearchRequest,
  BookSearchResponse,
  CreateBookRequest,
  CreateBookResponse,
  CreateQuoteRequest,
  CreateQuoteResponse,
  GetBookDetailResponse,
  GetBooksRequest,
  GetBooksResponse,
  GetQuotesResponse,
  GetRecentResponse,
} from '@/types/api/book';
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

const getBooks = async ({ isFavorite, isReading }: GetBooksRequest, accessToken: string) => {
  const params = createSearchParams({
    favorite: isFavorite,
    reading: isReading,
  });
  return fetchData<GetBooksResponse>(`/api/books?${params.toString()}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const getRecentBook = async (accessToken: string) => {
  return fetchData<GetRecentResponse>(`/api/books/recent`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const getBookDetail = async (id: string, accessToken: string) => {
  return fetchData<GetBookDetailResponse>(`/api/books/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const toggleBookComplete = async (id: string, accessToken: string) => {
  return fetchData<GetBookDetailResponse>(`/api/books/${id}/complete`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const toggleBookFavorite = async (id: string, accessToken: string) => {
  return fetchData<GetBookDetailResponse>(`/api/books/${id}/favorite`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const createQuote = async (quote: CreateQuoteRequest, id: string, accessToken: string) => {
  return fetchData<CreateQuoteResponse>(`/api/books/${id}/quotes`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(quote),
  });
};

const getQuotes = async (id: string, accessToken: string) => {
  return fetchData<GetQuotesResponse>(`/api/books/${id}/quotes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const editQuote = async (quote: CreateQuoteRequest, bookId: string, quoteId: string, accessToken: string) => {
  return fetchData<CreateQuoteResponse>(`/api/books/${bookId}/quotes/${quoteId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(quote),
  });
};

const deleteQuote = async (bookId: string, quoteId: string, accessToken: string) => {
  return fetchData(`/api/books/${bookId}/quotes/${quoteId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const toggleQuoteFavorite = async (bookId: string, quoteId: string, accessToken: string) => {
  return fetchData(`/api/books/${bookId}/quotes/${quoteId}/favorite`, {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const bookService = {
  search,
  create,
  getBooks,
  getRecentBook,
  getBookDetail,
  toggleBookComplete,
  toggleBookFavorite,
  createQuote,
  getQuotes,
  editQuote,
  deleteQuote,
  toggleQuoteFavorite,
};
