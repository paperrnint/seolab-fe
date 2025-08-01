import { FaBookmark, FaBookOpen, FaEye, FaEyeSlash, FaPen, FaTrash } from 'react-icons/fa6';

import { SmallButton } from '@/components/common/ui/SmallButton/SmallButton';
import { useBookMode } from '@/hooks/useBookMode';
import { useError } from '@/hooks/useError';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useBookComplete, useBookFavorite } from '@/hooks/useOptimisticUpdate';
import { useShowQuotePage } from '@/hooks/useShowQuotePage';

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
  const { showError } = useError();
  const { state: isFavorite, toggle: onClickFavorite } = useBookFavorite(id, initialValue?.isFavorite ?? false, {
    onError: (error) => showError('createBooks', error.status),
  });
  const { state: isReading, toggle: onClickComplete } = useBookComplete(id, initialValue?.isReading !== false, {
    onError: (error) => showError('createBooks', error.status),
  });

  const { isEditMode, onConfirm, onEdit } = useBookMode();
  const { showQuotePage, onToggle } = useShowQuotePage();
  const { isMobile } = useMediaQuery();

  if (isEditMode) {
    if (isMobile) return null;

    return (
      <div className="flex-shrink-0 pl-2">
        <SmallButton variant="primary" onClick={onConfirm}>
          확인
        </SmallButton>
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
