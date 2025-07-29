import { BookCard } from '@/components/book/BookCard/BookCard';
import { MainBookSupport } from '@/components/book/MainBookSupport/MainBookSupport';
import { NowBookContent } from '@/components/book/NowBookContent/NowBookContent';
import { NowBookHeader } from '@/components/book/NowBookHeader/NowBookHeader';
import { Txt } from '@/components/common/ui/Txt/Txt';
import { GridSection } from '@/components/layout/GridSection/GridSection';
import { getServerAuthData } from '@/lib/auth/server';
import { ApiError } from '@/lib/fetch/ApiError';
import { mapToBookCard } from '@/lib/mappers/bookMapper';
import { bookService } from '@/services/bookService';
import { BookCardItem } from '@/types/domain/book';

export default async function Home() {
  const authData = await getServerAuthData();
  const accessToken = authData?.accessToken;

  let allBooks: BookCardItem[] = [];
  let error: ApiError | null = null;

  if (accessToken) {
    try {
      const data = await bookService.getBooks({}, accessToken);
      allBooks = data.map(mapToBookCard);
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
      <NowBookHeader title="여름어 사전" dateDiff={3} count={8} />

      {/* recent book cover + quotes */}
      <NowBookContent
        thumbnail="/images/bookcover.jpg"
        quotes={[
          {
            quote:
              "한국어 문장을 이렇게 쓰는 경우는 드물다. 접미사 '-들'을 남발하는 문장은 대부분 번역 문장이다. (중략) 더군다나 관형사 '모든'으로 수식되는 명사에는 복수를 나타내는 접미사 '-들'을 붙이지 않는 것이 자연스럽다.",
            page: 29,
          },
          {
            quote:
              "한국어 문장을 이렇게 쓰는 경우는 드물다. 접미사 '-들'을 남발하는 문장은 대부분 번역 문장이다. (중략) 더군다나 관형사 '모든'으로 수식되는 명사에는 복수를 나타내는 접미사 '-들'을 붙이지 않는 것이 자연스럽다.",
            page: 29,
          },
        ]}
      />

      {/* favorites */}
      {favorites.length > 0 && (
        <GridSection label={`즐겨찾는 책 (${favorites.length})`}>
          {favorites.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              author={book.author}
              count={0} // @todo: quotes 개수로 변경
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
              count={0} // @todo: quotes 개수로 변경
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
              count={0} // @todo: quotes 개수로 변경
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
