'use client';

import { FaCircleExclamation } from 'react-icons/fa6';

import { getTextsByLine } from '@/utils';

import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { Txt } from '../Txt/Txt';

import { errorConfig, ErrorType } from './ErrorModal.constant';

interface Props {
  errorType: ErrorType;
  isOpen: boolean;
  onCloseModal: () => void;
  onClickButton: () => void;
}

export const ErrorModal = ({ errorType, isOpen, onCloseModal, onClickButton }: Props) => {
  const { title, text, button } = errorConfig[errorType];
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
