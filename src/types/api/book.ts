export interface SearchRequest {
  query: string;
  page?: number;
  size?: number;
}

export interface SearchBook {
  title: string;
  contents: string;
  isbn: string;
  publishedDate: string;
  authors: string[];
  publisher: string;
  translators: string[];
  thumbnail: string;
}

export interface SearchResponse {
  books: SearchBook[];
  totalCount: number;
  isEnd: boolean;
}
