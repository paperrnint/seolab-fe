'use client';

import { useRouter } from 'next/navigation';

import { useAuth } from '@/hooks';

import { Button } from '../../common/ui/Button/Button';
import { Txt } from '../../common/ui/Txt/Txt';

export const MainBookSupport = () => {
  const { user } = useAuth();
  const router = useRouter();

  const name = `${user?.username}님, ` || '';

  const onClick = () => {
    router.push('/search');
  };

  return (
    <div>
      <div className="flex-1 flex justify-center items-center py-10">
        <div className="pt-4 pb-8 h-full flex flex-col items-center justify-center">
          <div className="mb-4 text-center whitespace-pre-wrap">
            <Txt variant="captionSm">{name}반가워요 👋</Txt>
            <Txt variant="captionSm">지금 읽고 있는 책을 검색해 보세요</Txt>
          </div>
          <Button onClick={onClick}>시작하기</Button>
        </div>
      </div>
    </div>
  );
};
