import { FaHeart, FaPen, FaTrash } from 'react-icons/fa6';

import { Dropdown } from '@/components/common/ui/Dropdown/Dropdown';
import { DropdownLabel } from '@/components/common/ui/Dropdown/DropdownLabel/DropdownLabel';
import { useError } from '@/hooks/useError';
import { deleteQuoteAction } from '@/lib/actions/book';

interface Props {
  bookId: string;
  quoteId: string;
  clickEdit: () => void;
  onToggleFavorite?: () => void;
  onDelete?: () => void;
}

export const QuoteMoreMenu = ({ bookId, quoteId, clickEdit, onToggleFavorite, onDelete }: Props) => {
  const { showError } = useError();

  const deleteQuote = async () => {
    const result = await deleteQuoteAction(bookId, quoteId);
    if (result.success) {
      onDelete?.();
    } else {
      showError('delete', result.error.status);
    }
  };

  const onClickDelete = async () => {
    // @todo: change to confirm modal component
    const isConfirmed = confirm('정말 삭제하시겠습니까?');
    if (isConfirmed) {
      deleteQuote();
    }
  };

  return (
    <Dropdown.Root>
      <Dropdown.MoreTrigger size="sm" />
      <Dropdown.Content align="right">
        <Dropdown.Item onClick={clickEdit}>
          <DropdownLabel icon={<FaPen />}>수정</DropdownLabel>
        </Dropdown.Item>
        <Dropdown.Item onClick={onToggleFavorite}>
          <DropdownLabel icon={<FaHeart />}>즐겨찾기</DropdownLabel>
        </Dropdown.Item>
        <Dropdown.Item onClick={onClickDelete}>
          <DropdownLabel isSensitive icon={<FaTrash />}>
            삭제
          </DropdownLabel>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
};
