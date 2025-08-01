import { FaHeart, FaPen, FaTrash } from 'react-icons/fa6';

import { Dropdown } from '@/components/common/ui/Dropdown/Dropdown';
import { DropdownLabel } from '@/components/common/ui/Dropdown/DropdownLabel/DropdownLabel';
import { ConfirmModal } from '@/components/modal/ConfirmModal/ConfirmModal';
import { useQuoteDelete } from '@/hooks/useQuoteDelete';

interface Props {
  bookId: string;
  quoteId: string;
  clickEdit: () => void;
  onToggleFavorite?: () => void;
}

export const QuoteMoreMenu = ({ bookId, quoteId, clickEdit, onToggleFavorite }: Props) => {
  const { isOpenModal, showModal, closeModal, confirmDelete } = useQuoteDelete(bookId, quoteId);

  return (
    <>
      <Dropdown.Root>
        <Dropdown.MoreTrigger size="sm" />
        <Dropdown.Content align="right">
          <Dropdown.Item onClick={clickEdit}>
            <DropdownLabel icon={<FaPen />}>수정</DropdownLabel>
          </Dropdown.Item>
          <Dropdown.Item onClick={onToggleFavorite}>
            <DropdownLabel icon={<FaHeart />}>즐겨찾기</DropdownLabel>
          </Dropdown.Item>
          <Dropdown.Item onClick={showModal}>
            <DropdownLabel isSensitive icon={<FaTrash />}>
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
