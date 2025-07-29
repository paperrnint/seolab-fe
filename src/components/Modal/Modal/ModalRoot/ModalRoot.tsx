'use client';

import { FocusTrap } from 'focus-trap-react';
import { useEffect } from 'react';

import { Backdrop } from '@/components/modal/Backdrop/Backdrop';
import { Portal } from '@/components/modal/Portal/Portal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeOnBackdropClick?: boolean;
  closeOnEsc?: boolean;
}

export const ModalRoot = ({ isOpen, onClose, children, closeOnBackdropClick = true, closeOnEsc = true }: Props) => {
  useEffect(() => {
    if (!closeOnEsc) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // 스크롤 방지
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, closeOnEsc]);

  if (!isOpen) return null;

  const onClickBackdrop = () => {
    if (closeOnBackdropClick) {
      onClose();
    }
  };

  const onClickModal = (e: React.MouseEvent) => {
    e.stopPropagation(); // 이벤트 전파 방지
  };

  return (
    <Portal>
      <div className="fixed left-0 right-0 bottom-0 z-50 flex items-center justify-center p-2">
        <Backdrop onClick={onClickBackdrop} />
        <FocusTrap
          focusTrapOptions={{
            fallbackFocus: () => document.body,
            escapeDeactivates: false,
            clickOutsideDeactivates: closeOnBackdropClick,
          }}
        >
          <div
            className="relative bg-bg-card rounded-2xl shadow-default max-w-sm w-full max-h-[90vh] overflow-auto transform transition-all duration-300 ease-out scale-100 z-100"
            onClick={onClickModal}
            data-testid="modal-content"
            role="dialog"
            aria-modal="true"
          >
            <div className="p-5">{children}</div>
          </div>
        </FocusTrap>
      </div>
    </Portal>
  );
};
