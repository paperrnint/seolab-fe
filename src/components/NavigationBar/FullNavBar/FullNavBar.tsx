import Image from 'next/image';
import { FaBars, FaBoxArchive, FaHouse, FaPenToSquare, FaStar } from 'react-icons/fa6';

import { Button } from '@/components/Button/Button';
import { ExternalGradient } from '@/components/ExternalGradient/ExternalGradient';
import { NavItem } from '@/components/NavItem/NavItem';

interface Props {
  toggle: () => void;
  isMobile: boolean;
}

export const FullNavBar = ({ toggle, isMobile }: Props) => {
  return (
    <nav
      className={`
        h-dvh bg-bg-panel overflow-hidden max-w-2xs border-r border-r-border pr-0.5 flex flex-col flex-shrink-0 
        ${isMobile ? 'fixed top-0 left-0 bottom-0 z-50' : 'relative'}
      `}
    >
      {/* Header */}
      {!isMobile && (
        <div>
          <div className="flex gap-2 p-2 items-center">
            <button onClick={toggle} className="p-2 rounded-md hover:bg-btn-subtle cursor-pointer">
              <FaBars size={16} className="text-subtle" />
            </button>
            <Image src="/images/seolab-logo.png" width={80} height={18} alt="로고" />
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="mx-2">
        <div className="flex flex-col gap-1 py-2">
          <NavItem icon={<FaHouse className="text-secondary opacity-80" />}>홈</NavItem>
          <NavItem icon={<FaStar className="text-secondary opacity-80" />}>즐겨찾기</NavItem>
          <NavItem icon={<FaBoxArchive className="text-secondary opacity-80" />}>내 서랍</NavItem>
        </div>
      </div>

      {/* Recent Books */}
      <div className="flex-1 overflow-y-scroll pr-1 ml-2 mr-1">
        <div className="pb-4">
          <div className="m-2 text-subtle text-[10px]">최근 읽은 책</div>
          <div className="flex flex-col gap-1">
            <NavItem>내 문장이 그렇게 이상한가요? · 김정선</NavItem>
            <NavItem>여름은 오래 그곳에 남아 · 마쓰이에 마사시</NavItem>
            <NavItem>모순 · 양귀자</NavItem>
          </div>
        </div>
      </div>

      {/* Start New */}
      <div className="mb-2 px-2">
        <ExternalGradient>
          <Button variant="accent" rightIcon={<FaPenToSquare />}>
            새로운 책 기록하기
          </Button>
        </ExternalGradient>
      </div>
    </nav>
  );
};
