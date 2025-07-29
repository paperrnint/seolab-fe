import { BookCard } from '@/components/book/BookCard/BookCard';
import { MainBookSupport } from '@/components/book/MainBookSupport/MainBookSupport';
import { GridSection } from '@/components/layout/GridSection/GridSection';
import { getServerAuthData } from '@/lib/auth/server';
import { ApiError } from '@/lib/fetch/ApiError';
import { mapToBookCard } from '@/lib/mappers/bookMapper';
import { bookService } from '@/services/bookService';
import { BookCardItem } from '@/types/domain/book';

export default async function FavoritePage() {
  const authData = await getServerAuthData();
  const accessToken = authData?.accessToken;

  let favorites: BookCardItem[] = [];
  let error: ApiError | null = null;

  if (accessToken) {
    try {
      const data = await bookService.getBooks({ isFavorite: true }, accessToken);
      favorites = data.map(mapToBookCard);
    } catch (err) {
      error = err as ApiError;
      console.error('main page fetch books failed:', error);
    }
  }

  if (favorites.length === 0) {
    return (
      <div className="w-full max-w-7xl p-4">
        <MainBookSupport />
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl p-4">
      {favorites.length > 0 && (
        <GridSection label={`즐겨찾는 책 (${favorites.length})`}>
          {favorites.map((book) => (
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
