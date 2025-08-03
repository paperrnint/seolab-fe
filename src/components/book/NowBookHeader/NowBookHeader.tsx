'use client';

import { useRouter } from 'next/navigation';

import { calculateDaysDiff } from '@/utils';

import { Badge } from '../../common/ui/Badge/Badge';
import { Button } from '../../common/ui/Button/Button';
import { Title } from '../../common/ui/Title/Title';

interface Props {
  id: string;
  title: string;
  startDate: string;
  endDate?: string | null;
  count?: number;
}

export const NowBookHeader = ({ id, title, startDate, endDate, count }: Props) => {
  const router = useRouter();
  const dateDiff = calculateDaysDiff(startDate, endDate);

  const onClick = () => {
    router.push(`/book/${id}?mode=edit`);
  };

  return (
    <div className="pb-4">
      <div className="flex gap-2 flex-col md:flex-row items-start md:items-center">
        {/* Title */}
        <div className="flex-shrink-0 mt-1 md:my-0">
          <Title>{title}</Title>
        </div>

        <div className="flex items-start md:items-center justify-between w-full">
          {/* Badges */}
          <div className="flex gap-2">
            {dateDiff && <Badge>{dateDiff}일째</Badge>}
            {!!count && <Badge>{count}문장 수집 중</Badge>}
          </div>
          {/* Action */}
          <div>
            <Button onClick={onClick}>이어서 기록하기</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
