'use client';

import { FaCircleExclamation } from 'react-icons/fa6';

import { ErrorType } from '@/constants';
import { getErrorMessage, getTextsByLine } from '@/utils';

import { Button } from '../../common/ui/Button/Button';
import { Txt } from '../../common/ui/Txt/Txt';
import { Modal } from '../../modal/Modal/Modal';

interface Props {
  errorType: ErrorType;
  errorStatusCode: number;
  isOpen: boolean;
  onCloseModal: () => void;
  onClickButton: () => void;
}

export const ErrorModal = ({ errorType, errorStatusCode, isOpen, onCloseModal, onClickButton }: Props) => {
  const { title, text, button } = getErrorMessage(errorType, errorStatusCode);
  const texts = getTextsByLine(text);

  return (
    <Modal.Root isOpen={isOpen} onClose={onCloseModal} closeOnBackdropClick={true} closeOnEsc={true}>
      <Modal.Title icon={<FaCircleExclamation />}>{title}</Modal.Title>

      <Modal.Content>
        {texts.map((text, i) => (
          <Txt key={i} variant="caption">
            {text}
          </Txt>
        ))}
      </Modal.Content>

      <Modal.Action>
        <Button variant="form" onClick={onClickButton}>
          {button}
        </Button>
      </Modal.Action>
    </Modal.Root>
  );
};
