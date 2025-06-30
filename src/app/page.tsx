import { BookCard } from '@/components/BookCard/BookCard';
import { BookCover } from '@/components/BookCoverImg/BookCover';
import { Button } from '@/components/Button/Button';
import { NavItem } from '@/components/NavItem/NavItem';
import { QuoteNote } from '@/components/QuoteNote/QuoteNote';
import { FaArrowRight, FaBoxArchive, FaHouse, FaStar } from 'react-icons/fa6';

export default function Home() {
  return (
    <div className="p-2">
      <QuoteNote
        quote="한국어 문장을 이렇게 쓰는 경우는 드물다. 접미사 '-들'을 남발하는 문장은 대부분 번역 문장이다. (중략) 더군다나
          관형사 ‘모든'으로 수식되는 명사에는 복수를 나타내는 접미사 '-들'을 붙이지 않는 것이 자연스럽다."
        page={29}
      />
      <div className="flex gap-4">
        <BookCard
          title="여름어 사전 여름어 사전 여름어 사전 여름어 사전 여름어 사전 여름어 사전 여름어 사전 여름어 사전 여름어 사전"
          thumbnail="/images/bookcover.jpg"
          author="아침달 편집부"
          startAt="2025.06.30"
          count={2}
        />
        <BookCard
          title="여름어 사전"
          author="아침달 편집부"
          thumbnail="/images/bookcover.jpg"
          startAt="2025.06.30"
          count={2}
        />
      </div>
      <Button variant="primary">이어서 기록하기</Button>
      <Button variant="secondary">수정</Button>
      <BookCover src="/images/bookcover.jpg" alt="여름어사전" />
      <BookCover size="sm" src="/images/bookcover.jpg" alt="여름어사전" />
      <BookCover size="lg" src="/images/bookcover.jpg" alt="여름어사전" />
      <div className="w-62 flex flex-col gap-1">
        <NavItem icon={<FaHouse className="text-secondary opacity-80" />}>홈</NavItem>
        <NavItem icon={<FaStar className="text-secondary opacity-80" />}>즐겨찾기</NavItem>
        <NavItem icon={<FaBoxArchive className="text-secondary opacity-80" />}>내 서랍</NavItem>
        <NavItem>내 문장이 그렇게 이상한가요? · 김정선</NavItem>
        <NavItem>여름은 오래 그곳에 남아 · 마쓰이에 마사시</NavItem>
        <NavItem selected={true}>모순 · 양귀자</NavItem>
        <Button variant="accent" rightIcon={<FaArrowRight />}>
          새로운 책 기록하기
        </Button>
      </div>
    </div>
  );
}
