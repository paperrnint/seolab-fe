'use client';

import { useEffect } from 'react';
import { FaArrowRotateRight } from 'react-icons/fa6';

import { SmallButton } from '@/components/common/ui/SmallButton/SmallButton';
import { Title } from '@/components/common/ui/Title/Title';
import { Txt } from '@/components/common/ui/Txt/Txt';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="px-1 flex flex-col justify-between h-full">
      <div className="pt-4 pb-8 h-full flex flex-col items-center justify-center">
        <Title variant="error">문제가 발생했어요</Title>
        <div className="mb-4 text-center whitespace-pre-wrap">
          <Txt variant="captionSm">데이터를 가져오는 데 실패했어요</Txt>
          <Txt variant="captionSm">잠시 후 다시 시도해 보세요</Txt>
        </div>
        <SmallButton variant="subtle" onClick={reset}>
          <FaArrowRotateRight size={12} />
        </SmallButton>
      </div>
    </div>
  );
}
