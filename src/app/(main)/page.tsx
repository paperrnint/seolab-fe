import { BookCard } from '@/components/book/BookCard/BookCard';
import { MainBookSupport } from '@/components/book/MainBookSupport/MainBookSupport';
import { NowBookContent } from '@/components/book/NowBookContent/NowBookContent';
import { NowBookHeader } from '@/components/book/NowBookHeader/NowBookHeader';
import { Txt } from '@/components/common/ui/Txt/Txt';
import { GridSection } from '@/components/layout/GridSection/GridSection';
import { getServerAuthData } from '@/lib/auth/server';
import { ApiError } from '@/lib/fetch/ApiError';
import { mapToBookCard, mapToRecentBook } from '@/lib/mappers/bookMapper';
import { bookService } from '@/services/bookService';
import { BookCardItem, RecentBook } from '@/types/domain/book';

export default async function Home() {
  const authData = await getServerAuthData();
  const accessToken = authData?.accessToken;

  let allBooks: BookCardItem[] = [];
  let recentBook: RecentBook | null = null;
  let error: ApiError | null = null;

  if (accessToken) {
    try {
      const [booksData, recentData] = await Promise.all([
        bookService.getBooks({}, accessToken),
        bookService.getRecentBook(accessToken),
      ]);

      allBooks = booksData.map(mapToBookCard);
      recentBook = mapToRecentBook(recentData);
    } catch (err) {
      error = err as ApiError;
      console.error('main page fetch books failed:', error);
    }
  }

  const books = allBooks;
  const favorites = allBooks.filter((book) => book.isFavorite);
  const readings = allBooks.filter((book) => book.isReading);

  if (books.length === 0) {
    return (
      <div className="w-full max-w-7xl p-4">
        <MainBookSupport />
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl p-4">
      {/* recent book header */}
      <Txt variant="caption">은지님이 지금 읽고 있는 책</Txt>
      {recentBook ? (
        <>
          <NowBookHeader
            id={recentBook.id}
            title={recentBook.title}
            startDate={recentBook.startDate}
            endDate={recentBook.endDate}
            count={recentBook.quoteCount}
          />

          {/* recent book cover + quotes */}
          <NowBookContent thumbnail={recentBook.thumbnail} quotes={recentBook.quotes.slice(0, 2)} />
        </>
      ) : (
        <div>최근 책 없음</div>
      )}

      {/* favorites */}
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

      {/* reading */}
      {readings.length > 0 && (
        <GridSection label={`읽고 있는 책 (${readings.length})`}>
          {readings.map((book) => (
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

      {/* favorites */}
      {books.length > 0 && (
        <GridSection label={`전체 (${books.length})`}>
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
