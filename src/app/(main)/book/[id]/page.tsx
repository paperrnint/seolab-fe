import { BookDetail } from '@/components/book/BookDetail/BookDetail';
import { getServerAuthData } from '@/lib/auth/server';
import { ApiError } from '@/lib/fetch/ApiError';
import { mapToBookDetail } from '@/lib/mappers/bookMapper';
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
  const quotes: Quote[] = [];
  let error: ApiError | null = null;

  if (accessToken) {
    try {
      const data = await bookService.getBookDetail({ id }, accessToken);
      book = mapToBookDetail(data);
    } catch (err) {
      error = err as ApiError;
      console.error('detail page fetch book detail failed', error);
    }
  }

  return <BookDetail book={book} quotes={quotes} />;
}
