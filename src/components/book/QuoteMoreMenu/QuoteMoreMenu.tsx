import { FaHeart, FaHeartCircleXmark, FaPen, FaTrash } from 'react-icons/fa6';

import { Dropdown } from '@/components/common/ui/Dropdown/Dropdown';
import { DropdownLabel } from '@/components/common/ui/Dropdown/DropdownLabel/DropdownLabel';
import { ConfirmModal } from '@/components/modal/ConfirmModal/ConfirmModal';
import { useQuoteDelete } from '@/hooks/useQuoteDelete';

interface Props {
  bookId: string;
  quoteId: string;
  isFavorite: boolean;
  clickEdit: () => void;
  onToggleFavorite?: () => void;
  menuOpenCallback?: () => void;
  menuCloseCallback?: () => void;
}

export const QuoteMoreMenu = ({
  bookId,
  quoteId,
  isFavorite,
  clickEdit,
  onToggleFavorite,
  menuOpenCallback,
  menuCloseCallback,
}: Props) => {
  const { isOpenModal, showModal, closeModal, confirmDelete } = useQuoteDelete(bookId, quoteId);

  return (
    <>
      <Dropdown.Root openCallback={menuOpenCallback} closeCallback={menuCloseCallback}>
        <Dropdown.MoreTrigger size="sm" />
        <Dropdown.Content align="right">
          <Dropdown.Item onClick={clickEdit}>
            <DropdownLabel variant="sm" icon={<FaPen />}>
              수정
            </DropdownLabel>
          </Dropdown.Item>
          <Dropdown.Item onClick={onToggleFavorite}>
            <DropdownLabel variant="sm" icon={isFavorite ? <FaHeartCircleXmark /> : <FaHeart />}>
              {isFavorite ? '즐겨찾기 해제' : '즐겨찾기'}
            </DropdownLabel>
          </Dropdown.Item>
          <Dropdown.Item onClick={showModal}>
            <DropdownLabel variant="sm" isSensitive icon={<FaTrash />}>
              삭제
            </DropdownLabel>
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Root>

      <ConfirmModal
        type="danger"
        message="이 작업은 다시 되돌릴 수 없습니다.\n정말 삭제하시겠습니까?"
        confirmText="삭제"
        isOpen={isOpenModal}
        onClose={closeModal}
        onConfirm={confirmDelete}
      />
    </>
  );
};
