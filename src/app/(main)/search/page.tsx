import { BookItem } from '@/components/BookItem/BookItem';
import { Search } from '@/components/Search/Search';
import { SearchSupport } from '@/components/SearchSupport/SearchSupport';
import { getServerAuthData } from '@/lib/auth/server';
import { bookService } from '@/services/bookService';
import { SearchBook } from '@/types/api/book';

interface Props {
  searchParams: Promise<{
    q?: string | string[] | undefined;
    page?: string | string[] | undefined;
    size?: string | string[] | undefined;
  }>;
}

export default async function NewPage({ searchParams }: Props) {
  const params = await searchParams;
  const q = params.q || '';
  const query = Array.isArray(q) ? q[0] : q;

  const authData = await getServerAuthData();
  const accessToken = authData?.accessToken;

  let books: SearchBook[] = [];
  if (query && accessToken) {
    const data = await bookService.search({ query }, accessToken);
    books = data.books;
  }

  return (
    <div className="w-full max-w-4xl">
      <div className="p-2">
        <div>
          <Search key={query} initialQuery={query} />
        </div>

        <div className="py-3">
          {/* Empty */}
          {!query && <SearchSupport />}

          {/* Result */}
          {books?.map((book) => (
            <BookItem
              key={book.isbn}
              title={book.title}
              authors={book.authors}
              description={book.contents}
              publishedDate={book.publishedDate}
              publisher={book.publisher}
              thumbnail={book.thumbnail}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
