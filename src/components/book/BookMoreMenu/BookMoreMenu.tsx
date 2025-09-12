import { FaBookmark, FaBookOpen, FaEye, FaEyeSlash, FaPen, FaTrash } from 'react-icons/fa6';

import { SmallButton } from '@/components/common/ui/SmallButton/SmallButton';
import { ConfirmModal } from '@/components/modal/ConfirmModal/ConfirmModal';
import { useBookComplete, useBookDelete, useBookFavorite, useBookMode, useError, useMediaQuery } from '@/hooks';

import { Dropdown } from '../../common/ui/Dropdown/Dropdown';
import { DropdownLabel } from '../../common/ui/Dropdown/DropdownLabel/DropdownLabel';

interface Props {
  id: string;
  initialValue?: {
    isFavorite?: boolean;
    isReading?: boolean;
  };
  showQuotePage: boolean;
  toggleQuotePage: () => void;
}

export const BookMoreMenu = ({ id, initialValue, showQuotePage, toggleQuotePage }: Props) => {
  const { showError } = useError();
  const { state: isFavorite, toggle: onClickFavorite } = useBookFavorite(id, initialValue?.isFavorite ?? false, {
    onError: (error) => showError('createBooks', error.status),
  });
  const { state: isReading, toggle: onClickComplete } = useBookComplete(id, initialValue?.isReading !== false, {
    onError: (error) => showError('createBooks', error.status),
  });

  const { isEditMode, onConfirm, onEdit } = useBookMode();
  const { isOpenModal, showModal, closeModal, confirmDelete } = useBookDelete(id);
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
          <Dropdown.Item onClick={toggleQuotePage}>
            {showQuotePage ? (
              <DropdownLabel icon={<FaEyeSlash />}>페이지 숨김</DropdownLabel>
            ) : (
              <DropdownLabel icon={<FaEye />}>페이지 보기</DropdownLabel>
            )}
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
    </div>
  );
};
