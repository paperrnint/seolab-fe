type Book = {
  title: string;
  isbn: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  translators: string[];
  thumbnail: string;
};

export type BookSearchApiItem = Book & {
  contents: string;
};

export type BookListApiItem = {
  userBookId: string;
  book: BookSearchApiItem;
  startDate: string;
  endDate: string | null;
  isFavorite: boolean;
  isReading: boolean;
  createdAt: string;
  updatedAt: string;
};

// GET api/books/search
export type BookSearchRequest = {
  query: string;
  page?: number;
  size?: number;
};

export type BookSearchResponse = {
  books: BookSearchApiItem[];
  totalCount: number;
  isEnd: boolean;
};

// POST api/books
export type CreateBookRequest = BookSearchApiItem;

export type CreateBookResponse = {
  userBookId: string;
};

// GET api/books
export type GetBooksRequest = {
  isFavorite?: boolean;
  isReading?: boolean;
};

export type GetBooksResponse = BookListApiItem[];

// GET api/books/{id}
export type GetBookDetailResponse = {
  userBookId: string;
  book: Book;
  startDate: string;
  endDate: string | null;
  isFavorite: boolean;
  isReading: boolean;
  createdAt: string;
  updatedAt: string;
  // quotes:
};
