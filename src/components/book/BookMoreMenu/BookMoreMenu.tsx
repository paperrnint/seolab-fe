import { FaBookmark, FaBookOpen, FaEye, FaEyeSlash, FaPen, FaTrash } from 'react-icons/fa6';

import { useBookMode } from '@/hooks/useBookMode';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useBookComplete, useBookFavorite } from '@/hooks/useOptimisticUpdate';
import { useShowQuotePage } from '@/hooks/useShowQuotePage';

import { Button } from '../../common/ui/Button/Button';
import { Dropdown } from '../../common/ui/Dropdown/Dropdown';
import { DropdownLabel } from '../../common/ui/Dropdown/DropdownLabel/DropdownLabel';

interface Props {
  id: string;
  initialValue?: {
    isFavorite?: boolean;
    isReading?: boolean;
  };
}

export const BookMoreMenu = ({ id, initialValue }: Props) => {
  const { state: isFavorite, toggle: onClickFavorite } = useBookFavorite(id, initialValue?.isFavorite ?? false, {
    onError: (err) => console.error(err),
  });
  const { state: isReading, toggle: onClickComplete } = useBookComplete(id, initialValue?.isReading !== false, {
    onError: (err) => console.error(err),
  });

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

  return (
    <div className="flex-shrink-0 pl-2">
      <Dropdown.Root>
        <Dropdown.MoreTrigger />
        <Dropdown.Content align="right">
          <Dropdown.Item onClick={onEdit}>
            <DropdownLabel icon={<FaPen />}>수정하기</DropdownLabel>
          </Dropdown.Item>
          <Dropdown.Item onClick={onClickFavorite}>
            {isFavorite ? (
              <DropdownLabel icon={<FaBookmark />}>즐겨찾기 해제</DropdownLabel>
            ) : (
              <DropdownLabel icon={<FaBookmark />}>즐겨찾기</DropdownLabel>
            )}
          </Dropdown.Item>
          {isReading && (
            <Dropdown.Item onClick={onClickComplete}>
              <DropdownLabel icon={<FaBookOpen />}>독서 완료</DropdownLabel>
            </Dropdown.Item>
          )}
          <Dropdown.Item onClick={onToggle}>
            {showQuotePage ? (
              <DropdownLabel icon={<FaEyeSlash />}>페이지 숨김</DropdownLabel>
            ) : (
              <DropdownLabel icon={<FaEye />}>페이지 보기</DropdownLabel>
            )}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => console.log('삭제')}>
            <DropdownLabel isSensitive icon={<FaTrash />}>
              삭제
            </DropdownLabel>
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Root>
    </div>
  );
};
