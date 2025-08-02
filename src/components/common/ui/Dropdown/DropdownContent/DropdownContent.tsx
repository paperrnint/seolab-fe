'use client';

import { useEffect, useState } from 'react';

import { Portal } from '@/components/modal/Portal/Portal';
import { ANIMATION_DURATION } from '@/constants';
import { useDropdownPosition } from '@/hooks/useDropdownPosition';
import { useScrollLock } from '@/hooks/useScrollLock';

import { useDropdown } from '../@context/DropdownContext';

import { Align, Position } from './DropdownContent.constant';

interface Props {
  children: React.ReactNode;
  gap?: number;
  align?: Align;
  position?: Position;
  width?: 'fit' | 'auto';
}

export const DropdownContent = ({ children, gap = 8, align = 'left', position = 'bottom', width = 'auto' }: Props) => {
  const { isOpen, contentRef, triggerRef } = useDropdown();
  const [shouldMount, setShouldMount] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  const coordinates = useDropdownPosition({ triggerRef, isOpen, align, position, gap });
  useScrollLock({ isOpen, contentRef, scrollContainerId: 'detail-container' });

  // 열림/닫힘 애니메이션
  useEffect(() => {
    if (isOpen) {
      setShouldMount(true);
      // calculatePosition(); // 위치 계산
      const showTimer = setTimeout(() => {
        setIsVisible(true);
      }, 10);
      return () => clearTimeout(showTimer);
    } else {
      setIsVisible(false);
      setShouldMount(false);
    }
  }, [isOpen]);

  if (!shouldMount) return null;

  return (
    <Portal>
      <div
        className={`
          fixed z-50
          bg-bg-card rounded-lg border border-border
          shadow-default overflow-hidden
          ${width === 'auto' ? 'min-w-max' : 'w-fit'}
          whitespace-nowrap
          transition-all ease-out
          ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        style={{
          top: `${coordinates.top}px`,
          left: `${coordinates.left}px`,
          transitionDuration: `${ANIMATION_DURATION}ms`,
          ...(align === 'right' && { transform: 'translateX(-100%)' }),
          ...(position === 'top' && { transform: 'translateY(-100%)' }),
          ...(align === 'right' && position === 'top' && { transform: 'translate(-100%, -100%)' }),
        }}
        ref={contentRef}
      >
        {children}
      </div>
    </Portal>
  );
};
