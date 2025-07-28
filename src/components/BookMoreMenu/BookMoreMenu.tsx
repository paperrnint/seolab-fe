import { useState } from 'react';
import { FaBookmark, FaBookOpen, FaEye, FaEyeSlash, FaPen, FaTrash } from 'react-icons/fa6';

import { useBookMode } from '@/hooks/useBookMode';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useShowQuotePage } from '@/hooks/useShowQuotePage';
import { toggleBookCompleteAction, toggleBookFavoriteAction } from '@/lib/actions/book';

import { Button } from '../Button/Button';
import { Dropdown } from '../Dropdown/Dropdown';
import { MoreItem } from '../MoreItem/MoreItem';

interface Props {
  id: string;
  initialValue?: {
    isFavorite?: boolean;
    isReading?: boolean;
  };
}

export const BookMoreMenu = ({ id, initialValue }: Props) => {
  const [isFavorite, setIsFavorite] = useState(initialValue?.isFavorite ? initialValue.isFavorite : false);
  const [isReading, setIsReading] = useState(initialValue?.isReading === false ? false : true);

  const { isEditMode, onConfirm, onEdit } = useBookMode();
  const { showQuotePage, onToggle } = useShowQuotePage();
  const { isMobile } = useMediaQuery();

  if (isEditMode) {
    if (isMobile) return null;

    return (
      <div className="flex-shrink-0 pl-2">
        <Button variant="navConfirm" onClick={onConfirm}>
          확인
        </Button>
      </div>
    );
  }

  const onClickFavorite = async () => {
    setIsFavorite((prev) => !prev);
    const result = await toggleBookFavoriteAction(id);

    if (!result.success) {
      setIsFavorite((prev) => !prev);
    }
  };

  const onClickComplete = async () => {
    setIsReading((prev) => !prev);
    const result = await toggleBookCompleteAction(id);
    if (!result.success) {
      setIsReading((prev) => !prev);
      console.error(result.error);
    }
  };

  return (
    <div className="flex-shrink-0 pl-2">
      <Dropdown.Root>
        <Dropdown.MoreTrigger />
        <Dropdown.Content align="right">
          <Dropdown.Item onClick={onEdit}>
            <MoreItem icon={<FaPen />}>수정하기</MoreItem>
          </Dropdown.Item>
          <Dropdown.Item onClick={onClickFavorite}>
            {isFavorite ? (
              <MoreItem icon={<FaBookmark />}>즐겨찾기 해제</MoreItem>
            ) : (
              <MoreItem icon={<FaBookmark />}>즐겨찾기</MoreItem>
            )}
          </Dropdown.Item>
          {isReading && (
            <Dropdown.Item onClick={onClickComplete}>
              <MoreItem icon={<FaBookOpen />}>독서 완료</MoreItem>
            </Dropdown.Item>
          )}
          <Dropdown.Item onClick={onToggle}>
            {showQuotePage ? (
              <MoreItem icon={<FaEyeSlash />}>페이지 숨김</MoreItem>
            ) : (
              <MoreItem icon={<FaEye />}>페이지 보기</MoreItem>
            )}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => console.log('삭제')}>
            <MoreItem isSensitive icon={<FaTrash />}>
              삭제
            </MoreItem>
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Root>
    </div>
  );
};
