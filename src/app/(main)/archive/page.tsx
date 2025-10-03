import { BookCard } from '@/components/book/BookCard/BookCard';
import { EmptyState } from '@/components/book/EmptyState/EmptyState';
import { GridSection } from '@/components/layout/GridSection/GridSection';
import { getServerAuthData } from '@/lib/auth/server';
import { ApiError } from '@/lib/fetch/ApiError';
import { mapToBookCard } from '@/lib/mappers/bookMapper';
import { bookService } from '@/services/bookService';
import { BookCardItem } from '@/types/domain/book';

export default async function ArchivePage() {
  const authData = await getServerAuthData();
  const accessToken = authData?.accessToken;

  let books: BookCardItem[] = [];
  let error: ApiError | null = null;

  if (accessToken) {
    try {
      const data = await bookService.getBooks({}, accessToken);
      books = data.map(mapToBookCard);
    } catch (err) {
      error = err as ApiError;
      console.error('archive page fetch books failed:', error);
    }
  }

  if (books.length === 0) {
    return (
      <div className="w-full max-w-7xl p-4">
        <EmptyState type="all" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl p-4">
      {books.length > 0 && (
        <GridSection label={`전체 (${books.length})`} hideBorder>
          {books.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              author={book.author}
              count={book.quoteCount}
              endAt={book.endDate}
              startAt={book.startDate}
              thumbnail={book.thumbnail}
              title={book.title}
            />
          ))}
        </GridSection>
      )}
    </div>
  );
}
