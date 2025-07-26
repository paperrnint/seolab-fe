export type Quote = {
  page: number;
  quote: string;
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
  // quotes: Quote[];
  // quoteCount: number;
};

export type BookCardItem = Omit<BookDetailItem, 'isbn' | 'publisher' | 'publishedDate' | 'translator'>;
