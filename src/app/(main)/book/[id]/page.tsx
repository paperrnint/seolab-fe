import { BookDetail } from '@/components/book/BookDetail/BookDetail';
import { getServerAuthData } from '@/lib/auth/server';
import { ApiError } from '@/lib/fetch/ApiError';
import { mapToBookDetail, mapToQuote } from '@/lib/mappers/bookMapper';
import { bookService } from '@/services/bookService';
import { BookDetailItem, Quote } from '@/types/domain/book';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function BookPage({ params }: Props) {
  const { id } = await params;

  const authData = await getServerAuthData();
  const accessToken = authData?.accessToken;

  let book: BookDetailItem | null = null;
  let quotes: Quote[] = [];
  let error: ApiError | null = null;

  if (accessToken) {
    try {
      const [bookData, quotesData] = await Promise.all([
        bookService.getBookDetail(id, accessToken),
        bookService.getQuotes(id, accessToken),
      ]);

      book = mapToBookDetail(bookData);
      quotes = quotesData.map(mapToQuote);
    } catch (err) {
      error = err as ApiError;
      console.error('detail page fetch book detail failed', error);
    }
  }

  return <BookDetail book={book} initialQuotes={quotes} />;
}
