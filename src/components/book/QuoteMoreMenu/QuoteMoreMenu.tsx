import { FaHeart, FaPen, FaTrash } from 'react-icons/fa6';

import { Dropdown } from '@/components/common/ui/Dropdown/Dropdown';
import { DropdownLabel } from '@/components/common/ui/Dropdown/DropdownLabel/DropdownLabel';

interface Props {
  clickEdit: () => void;
  clickToggleFavorite: () => void;
  clickDelete: () => void;
}

export const QuoteMoreMenu = ({ clickEdit, clickToggleFavorite, clickDelete }: Props) => {
  return (
    <Dropdown.Root>
      <Dropdown.MoreTrigger size="sm" />
      <Dropdown.Content align="right">
        <Dropdown.Item onClick={clickEdit}>
          <DropdownLabel icon={<FaPen />}>수정</DropdownLabel>
        </Dropdown.Item>
        <Dropdown.Item onClick={clickToggleFavorite}>
          <DropdownLabel icon={<FaHeart />}>즐겨찾기</DropdownLabel>
        </Dropdown.Item>
        <Dropdown.Item onClick={clickDelete}>
          <DropdownLabel isSensitive icon={<FaTrash />}>
            삭제
          </DropdownLabel>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
};
