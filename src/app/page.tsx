import { Button } from '@/components/Button/Button';
import { NavItem } from '@/components/NavItem/NavItem';
import { FaArrowRight, FaBoxArchive, FaHouse, FaStar } from 'react-icons/fa6';

export default function Home() {
  return (
    <div className="p-2">
      <Button variant="primary">이어서 기록하기</Button>
      <Button variant="secondary">수정</Button>
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
