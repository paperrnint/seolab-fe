export type Quote = {
  id: string;
  page: number | null;
  text: string;
  isFavorite: boolean;
  createdAt: string;
  updatedAt: string;
};

type Book = {
  title: string;
  isbn: string;
  author: string;
  publisher: string;
  publishedDate: string;
  translator: string;
  thumbnail: string;
};

export type BookSearchItem = Book & {
  description: string;
};

export type BookDetailItem = Book & {
  id: string;
  startDate: string;
  endDate: string | null;
  isReading: boolean;
  isFavorite: boolean;
  quoteCount: number;
};

export type BookCardItem = Omit<BookDetailItem, 'isbn' | 'publisher' | 'publishedDate' | 'translator'>;

export type RecentBook = {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
  startDate: string; // ISO 8601
  endDate?: string | null; // ISO 8601
  quoteCount: number;
  quotes: Quote[];
};
