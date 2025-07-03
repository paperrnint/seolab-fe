import { Badge } from '../Badge/Badge';
import { BookCover } from '../BookCover/BookCover';
import { Card } from '../Card/Card';

interface Props {
  title: string;
  author: string;
  thumbnail: string;
  startAt: string;
  endAt?: string;
  count: number;
  width?: number; // px
}

export const BookCard = ({ title, author, thumbnail, startAt, endAt, count, width = 320 }: Props) => {
  const period = `${startAt} - ${endAt || '읽는중'}`;
  const minWidth = Math.max(width, 180);

  return (
    <Card style={{ width: `${minWidth}px`, minWidth: `${minWidth}px` }}>
      <div className="flex gap-4 w-full">
        <BookCover src={thumbnail} size="sm" hasBorder isRounded />
        <div className="flex flex-col justify-between flex-1">
          <div>
            <h3 className="text-sm line-clamp-2 leading-6 font-bold">{title}</h3>
            <p className="text-xs line-clamp-1 leading-6">{author}</p>
          </div>
          <div className="flex justify-between items-center flex-wrap gap-1">
            <p className="text-[10px] text-text-muted line-clamp-1">{period}</p>
            <div className="flex justify-end flex-1">
              <Badge>{count > 999 ? '999+' : count}문장</Badge>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
