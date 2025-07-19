import { Search } from '@/components/Search/Search';
import { SearchContent } from '@/components/SearchContent/SearchContent';
import { getServerAuthData } from '@/lib/auth/server';
import { ApiError } from '@/lib/fetch/ApiError';
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
  let error: ApiError | null = null;

  if (query && accessToken) {
    try {
      // @todo: infinite scroll
      const data = await bookService.search({ query }, accessToken);
      books = data.books;
    } catch (err) {
      console.error('search failed:', err);
      error = err as ApiError;
    }
  }

  return (
    <div className="w-full max-w-4xl h-full flex flex-col">
      <div className="p-2 pb-0 flex-shrink-0">
        <Search key={query} initialQuery={query} />
      </div>

      <div className="flex-1 p-2 pt-1 overflow-auto">
        <SearchContent query={query} error={error} books={books} />
      </div>
    </div>
  );
}
