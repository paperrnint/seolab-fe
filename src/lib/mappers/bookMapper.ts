import {
  BookListApiItem,
  BookSearchApiItem,
  CreateBookRequest,
  GetBookDetailResponse,
  QuoteApiItem,
} from '@/types/api/book';
import { BookCardItem, BookDetailItem, BookSearchItem, Quote } from '@/types/domain/book';
import { convertToISOFormat, formatDate, formatDateKorean } from '@/utils';

// GET /api/books/search
export const mapToBookSearchItem = (data: BookSearchApiItem): BookSearchItem => {
  const { authors, translators, contents, ...book } = data;
  return {
    ...book,
    author: authors.join(', '),
    translator: translators.join(', '),
    description: contents,
    publishedDate: formatDate(book.publishedDate),
  };
};

// POST /api/books
export const mapToCreateBookRequest = (data: BookSearchItem): CreateBookRequest => {
  const { author, translator, description, publishedDate, ...book } = data;
  return {
    ...book,
    authors: author.split(', '),
    translators: translator.split(', '),
    contents: description,
    publishedDate: convertToISOFormat(publishedDate),
  };
};

// GET /api/books
export const mapToBookCard = (data: BookListApiItem): BookCardItem => {
  const { book, userBookId, startDate, endDate, isFavorite, isReading, quoteCount } = data;
  const { title, authors, thumbnail } = book;
  return {
    id: userBookId,
    title,
    author: authors.join(', '),
    thumbnail,
    startDate: formatDateKorean(startDate),
    endDate: endDate ? formatDateKorean(endDate) : null,
    isFavorite,
    isReading,
    quoteCount,
  };
};

// GET /api/books/{id}
export const mapToBookDetail = (data: GetBookDetailResponse): BookDetailItem => {
  const { book, userBookId, startDate, endDate, isReading, isFavorite, quoteCount } = data;
  const { title, isbn, authors, publisher, publishedDate, translators, thumbnail } = book;
  return {
    id: userBookId,
    title,
    isbn,
    author: authors.join(', '),
    publisher,
    publishedDate: formatDate(publishedDate),
    thumbnail,
    startDate: formatDateKorean(startDate),
    endDate: endDate ? formatDateKorean(endDate) : null,
    translator: translators.join(', '),
    isReading,
    isFavorite,
    quoteCount,
  };
};

export const mapToQuote = (data: QuoteApiItem): Quote => {
  const { quoteId, createdAt, updatedAt, ...quote } = data;
  return {
    ...quote,
    id: quoteId,
    createdAt: formatDate(createdAt),
    updatedAt: formatDate(updatedAt),
  };
};
