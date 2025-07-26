import { FaEye, FaEyeSlash, FaPen, FaTrash } from 'react-icons/fa6';

import { useBookMode } from '@/hooks/useBookMode';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useShowQuotePage } from '@/hooks/useShowQuotePage';

import { Button } from '../Button/Button';
import { Dropdown } from '../Dropdown/Dropdown';
import { MoreItem } from '../MoreItem/MoreItem';

export const BookMoreMenu = () => {
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
            <MoreItem icon={<FaPen />}>수정하기</MoreItem>
          </Dropdown.Item>
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
