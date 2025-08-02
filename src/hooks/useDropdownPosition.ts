import { useCallback, useEffect, useState } from 'react';

import { Align, Position } from '@/components/common/ui/Dropdown/DropdownContent/DropdownContent.constant';

interface Props {
  triggerRef: React.RefObject<HTMLDivElement | null>;
  isOpen: boolean;
  align: Align;
  position: Position;
  gap: number;
}

export const useDropdownPosition = ({ triggerRef, isOpen, align, position, gap }: Props) => {
  const [coordinates, setCoordinates] = useState({ top: 0, left: 0 });

  const calculatePosition = useCallback(() => {
    if (!triggerRef?.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    let top = 0;
    let left = 0;

    // position 계산
    switch (position) {
      case 'top':
        top = triggerRect.top + scrollY - gap;
        break;
      case 'bottom':
      default:
        top = triggerRect.bottom + scrollY + gap;
        break;
    }

    // align 계산
    switch (align) {
      case 'left':
        left = triggerRect.left + scrollX;
        break;
      case 'right':
        left = triggerRect.right + scrollX;
        break;
      case 'left-outside':
        left = triggerRect.left + scrollX - gap; // @todo: - contents width?
        break;
      case 'right-outside':
        left = triggerRect.right + scrollX + gap;
        break;
    }

    setCoordinates({ top, left });
  }, [align, gap, position, triggerRef]);

  // calculate position when toggle isOpen
  useEffect(() => {
    if (isOpen) {
      calculatePosition();
    }
  }, [isOpen, calculatePosition]);

  // calculate position when resize
  useEffect(() => {
    if (!isOpen) return;

    window.addEventListener('resize', calculatePosition);
    return () => window.removeEventListener('resize', calculatePosition);
  }, [isOpen, calculatePosition]);

  return coordinates;
};
