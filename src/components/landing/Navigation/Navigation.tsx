import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/common/ui/Button/Button';

export const LandingNavigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-bg-card">
      <div className="max-w-6xl mx-auto pl-6 pr-2 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image src="/images/icon.png" width={32} height={32} alt="아이콘" />
          </Link>
        </div>
        <div className="flex">
          <Link href="/login">
            <Button variant="transparent">로그인</Button>
          </Link>
          <Link href="/join">
            <Button variant="primary">시작하기</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
