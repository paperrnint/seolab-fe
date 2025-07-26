import { useBookMode } from '@/hooks/useBookMode';

import { Badge } from '../Badge/Badge';
import { BookCover } from '../BookCover/BookCover';
import { BookmarkWrapper } from '../BookmarkWrapper/BookmarkWrapper';
import { BookMoreMenu } from '../BookMoreMenu/BookMoreMenu';
import { Checkbox } from '../Checkbox/Checkbox';
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
  const { isEditMode } = useBookMode();
  const duration = `${startAt} - ${endAt || '기록중'}`;

  return (
    <div className="flex gap-4 p-4 pr-2 border-b border-border">
      {/* 책 커버 */}
      <BookmarkWrapper readOnly={!isEditMode}>
        <BookCover src={thumbnail} size="xs" hasBorder isRounded isSquare />
      </BookmarkWrapper>

      {/* 책 정보 컨텐츠 */}
      <div className="flex flex-col w-full">
        {/* 책 제목 + badge */}
        <div className="flex">
          <BookTitle>
            <Title>{title}</Title>
            <BadgeList>
              {!isEditMode ? (
                <>
                  <Badge>{duration}</Badge>
                  <Badge>{`${count}문장`}</Badge>
                </>
              ) : (
                <Checkbox label="다 읽었어요" checkedLabel="완독 성공! 🎉" />
              )}
            </BadgeList>
          </BookTitle>
          <BookMoreMenu />
        </div>
        {/* 작가, 정보 */}
        <BookMeta>{`${author} · ${publisher} · ${publishedDate}`}</BookMeta>
      </div>
    </div>
  );
};
