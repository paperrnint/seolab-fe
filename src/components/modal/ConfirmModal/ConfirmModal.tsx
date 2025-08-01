import { FaTriangleExclamation } from 'react-icons/fa6';

import { ModalButton } from '@/components/common/ui/ModalButton/ModalButton';
import { Txt } from '@/components/common/ui/Txt/Txt';
import { getTextsByLine } from '@/utils';

import { Modal } from '../Modal/Modal';

interface Props {
  type?: 'default' | 'danger';
  title?: string;
  message?: string;
  isOpen: boolean;
  confirmText?: string;
  cancelText?: string;
  onClose: () => void;
  onConfirm: () => Promise<void> | void;
}

export const ConfirmModal = ({
  type = 'default',
  title = '',
  message = '해당 작업을 실행하시겠습니까?',
  confirmText = '확인',
  cancelText = '취소',
  isOpen,
  onClose,
  onConfirm,
}: Props) => {
  const messages = getTextsByLine(message);

  if (!isOpen) return null;

  return (
    <Modal.Root isOpen={isOpen} onClose={onClose}>
      <Modal.Title variant={type} icon={<FaTriangleExclamation />}>
        {title}
      </Modal.Title>
      <Modal.Content>
        {messages.map((text, i) => (
          <Txt key={i} variant="caption">
            {text}
          </Txt>
        ))}
      </Modal.Content>
      <Modal.Action>
        <ModalButton variant="cancel" onClick={onClose}>
          {cancelText}
        </ModalButton>
        <ModalButton variant={`${type === 'default' ? 'confirm' : 'delete'}`} onClick={onConfirm}>
          {confirmText}
        </ModalButton>
      </Modal.Action>
    </Modal.Root>
  );
};
