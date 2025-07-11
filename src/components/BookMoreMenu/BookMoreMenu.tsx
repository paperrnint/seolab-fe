import { FaEye, FaEyeSlash, FaPen, FaTrash } from 'react-icons/fa6';

import { useBookMode } from '@/hooks/useBookMode';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { useShowQuotePage } from '@/hooks/useShowQuotePage';

import { BookMoreItem } from '../BookMoreItem/BookMoreItem';
import { Button } from '../Button/Button';
import { Dropdown } from '../Dropdown/Dropdown';

export const BookMoreMenu = () => {
  const { mode, onEdit, onConfirm } = useBookMode();
  const { showQuotePage, onToggle } = useShowQuotePage();
  const { isMobile } = useMediaQuery();

  if (mode === 'edit') {
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
            <BookMoreItem icon={<FaPen />}>수정하기</BookMoreItem>
          </Dropdown.Item>
          <Dropdown.Item onClick={onToggle}>
            {showQuotePage ? (
              <BookMoreItem icon={<FaEyeSlash />}>페이지 숨김</BookMoreItem>
            ) : (
              <BookMoreItem icon={<FaEye />}>페이지 보기</BookMoreItem>
            )}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => console.log('삭제')}>
            <BookMoreItem isSensitive icon={<FaTrash />}>
              삭제
            </BookMoreItem>
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Root>
    </div>
  );
};
