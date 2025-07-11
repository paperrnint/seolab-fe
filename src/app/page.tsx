import { BookCard } from '@/components/BookCard/BookCard';
import { GridSection } from '@/components/GridSection/GridSection';
import { NavLayout } from '@/components/NavLayout/NavLayout';
import { NowBookContent } from '@/components/NowBookContent/NowBookContent';
import { NowBookHeader } from '@/components/NowBookHeader/NowBookHeader';
import { Txt } from '@/components/Txt/Txt';

export default function Home() {
  const DUMMY_BOOK = {
    author: '작가명',
    count: 10,
    endAt: '25년 8월 1일',
    startAt: '25년 6월 30일',
    thumbnail: '/images/bookcover-long.jpg',
    title: '책 제목',
  } as const;
  const FAVORITE_BOOKS = Array.from({ length: 3 }, () => DUMMY_BOOK);
  const READING_BOOKS = Array.from({ length: 8 }, () => DUMMY_BOOK);

  return (
    <NavLayout>
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
        <GridSection label={`즐겨찾는 책 (${FAVORITE_BOOKS.length})`}>
          {FAVORITE_BOOKS.map((book, i) => (
            <BookCard
              key={i}
              author={book.author}
              count={book.count}
              endAt={book.endAt}
              startAt={book.startAt}
              thumbnail={book.thumbnail}
              title={book.title}
            />
          ))}
        </GridSection>

        {/* reading */}
        <GridSection label={`읽고 있는 책 (${READING_BOOKS.length})`}>
          {READING_BOOKS.map((book, i) => (
            <BookCard
              key={i}
              author={book.author}
              count={book.count}
              endAt={book.endAt}
              startAt={book.startAt}
              thumbnail={book.thumbnail}
              title={book.title}
            />
          ))}
        </GridSection>
      </div>
    </NavLayout>
  );
}
