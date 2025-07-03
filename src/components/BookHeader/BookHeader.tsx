import { convertDateText, getDaysDiff } from '@/utils';
import { Badge } from '../Badge/Badge';
import { BookCover } from '../BookCover/BookCover';
import { Title } from '../Title/Title';
import { BadgeList } from './BadgeList/BadgeList';
import { BookMeta } from './BookMeta/BookMeta';
import { BookTitle } from './BookTitle/BookTitle';

interface Props {
  title: string;
  author: string;
  thumbnail: string;
  publisher: string;
  publishedDate: string;
  startAt: string;
  endAt?: string;
  count: number;
}

export const BookHeader = ({ title, author, thumbnail, publisher, publishedDate, startAt, endAt, count }: Props) => {
  const daysDiff = getDaysDiff(startAt, endAt);
  const duration = `${convertDateText(startAt)} - ${endAt ? convertDateText(endAt) : '기록중'}`;
  const meta = `${author} · ${publisher} · ${publishedDate}`;

  return (
    <div className="flex gap-4 px-4 py-4 border-b border-border">
      <div className="flex flex-col w-full">
        <BookTitle>
          <Title>{title}</Title>
          <BadgeList>
            <Badge>{duration}</Badge>
            <Badge>{`${count}문장`}</Badge>
          </BadgeList>
        </BookTitle>
        <BookMeta>{meta}</BookMeta>
      </div>
      <BookCover src={thumbnail} size="xs" hasBorder isRounded isSquare />
    </div>
  );
};
