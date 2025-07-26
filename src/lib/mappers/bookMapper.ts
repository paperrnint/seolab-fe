import { BookListApiItem, BookSearchApiItem, CreateBookRequest, GetBookDetailResponse } from '@/types/api/book';
import { BookCardItem, BookDetailItem, BookSearchItem } from '@/types/domain/book';
import { convertToISOFormat, formatDate } from '@/utils';

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
  const { book, userBookId, startDate, endDate, isFavorite, isReading } = data;
  const { title, authors, thumbnail } = book;
  return {
    id: userBookId,
    title,
    author: authors.join(', '),
    thumbnail,
    startDate: formatDate(startDate),
    endDate: endDate ? formatDate(endDate) : null,
    isFavorite,
    isReading,
  };
};

// GET /api/books/{id}
export const mapToBookDetail = (data: GetBookDetailResponse): BookDetailItem => {
  const { book, userBookId, startDate, endDate, isReading, isFavorite } = data;
  const { title, isbn, authors, publisher, publishedDate, translators, thumbnail } = book;
  return {
    id: userBookId,
    title,
    isbn,
    author: authors.join(', '),
    publisher,
    publishedDate: formatDate(publishedDate),
    thumbnail,
    startDate: formatDate(startDate),
    endDate: endDate ? formatDate(endDate) : null,
    translator: translators.join(', '),
    isReading,
    isFavorite,
  };
};
