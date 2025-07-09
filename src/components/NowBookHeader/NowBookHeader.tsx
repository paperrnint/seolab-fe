import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
import { Title } from '../Title/Title';

interface Props {
  title: string;
  dateDiff: number;
  count: number;
}

export const NowBookHeader = ({ title, dateDiff, count }: Props) => {
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
            <Badge>{dateDiff}일째</Badge>
            <Badge>{count}문장 수집 중</Badge>
          </div>
          {/* Action */}
          <div>
            <Button>이어서 기록하기</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
