'use client';

import { useRouter } from 'next/navigation';

import { useAuth } from '@/hooks';

import { Button } from '../../common/ui/Button/Button';
import { Txt } from '../../common/ui/Txt/Txt';

import { emptyConfig } from './EmptyState.constant';

interface Props {
  type: 'all' | 'favorite';
}

export const EmptyState = ({ type }: Props) => {
  const { user } = useAuth();
  const router = useRouter();

  const { primaryText, secondaryText, buttonText, redirectPath } = emptyConfig[type];
  const name = `${user?.username}님,` || '';

  const onClick = () => {
    router.push(redirectPath);
  };

  return (
    <div>
      <div className="flex-1 flex justify-center items-center py-10">
        <div className="pt-4 pb-8 h-full flex flex-col items-center justify-center">
          <div className="mb-4 text-center whitespace-pre-wrap">
            <Txt variant="captionSm">
              {name} {primaryText}
            </Txt>
            <Txt variant="captionSm">{secondaryText}</Txt>
          </div>
          <Button onClick={onClick}>{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};
