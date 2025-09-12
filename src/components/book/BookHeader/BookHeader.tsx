import { useBookMode } from '@/hooks';

import { Badge } from '../../common/ui/Badge/Badge';
import { Title } from '../../common/ui/Title/Title';
import { BookCover } from '../BookCover/BookCover';
import { BookmarkWrapper } from '../BookmarkWrapper/BookmarkWrapper';
import { BookMoreMenu } from '../BookMoreMenu/BookMoreMenu';
import { Checkbox } from '../Checkbox/Checkbox';

import { BadgeList } from './BadgeList/BadgeList';
import { BookMeta } from './BookMeta/BookMeta';
import { BookTitle } from './BookTitle/BookTitle';

interface Props {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
  publisher: string;
  publishedDate: string;
  startAt: string;
  endAt: string | null;
  isFavorite: boolean;
  isReading: boolean;
  showQuotePage: boolean;
  toggleQuotePage: () => void;
}

export const BookHeader = ({
  id,
  title,
  author,
  thumbnail,
  publisher,
  publishedDate,
  startAt,
  endAt,
  isFavorite,
  isReading,
  showQuotePage,
  toggleQuotePage,
}: Props) => {
  const { isEditMode } = useBookMode();
  const duration = `${startAt} - ${endAt || '기록중'}`;

  return (
    <div className="flex gap-4 p-4 pr-2 border-b border-border">
      {/* 책 커버 */}
      <BookmarkWrapper id={id} initialValue={isFavorite} readOnly={!isEditMode}>
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
                <Badge>{duration}</Badge>
              ) : (
                <Checkbox id={id} initialValue={!isReading} label="다 읽었어요" checkedLabel="완독 성공! 🎉" />
              )}
            </BadgeList>
          </BookTitle>
          <BookMoreMenu
            id={id}
            initialValue={{ isFavorite, isReading }}
            showQuotePage={showQuotePage}
            toggleQuotePage={toggleQuotePage}
          />
        </div>
        {/* 작가, 정보 */}
        <BookMeta>{`${author} · ${publisher} · ${publishedDate}`}</BookMeta>
      </div>
    </div>
  );
};
