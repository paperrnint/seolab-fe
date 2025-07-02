'use client';

import { ANIMATION_DURATION } from '@/constants';
import { useEffect, useState } from 'react';
import { useDropdown } from '../@context/DropdownContext';

interface Props {
  children: React.ReactNode;
  gap?: number;
}

export const DropdownContent = ({ children, gap = 8 }: Props) => {
  const { isOpen, contentRef, onClose } = useDropdown();
  const [shouldMount, setShouldMount] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  // 열림 : DOM mount -> visible (opacity 0 -> 1)
  // 닫힘 : invisible (opacity 1 -> 0) -> DOM unmount
  useEffect(() => {
    console.log('isOpen changed:', isOpen);
    if (isOpen) {
      setShouldMount(true);
      const showTimer = setTimeout(() => {
        setIsVisible(true);
      }, 10);
      return () => clearTimeout(showTimer);
    } else {
      setIsVisible(false);
      const hideTimer = setTimeout(() => {
        setShouldMount(false);
      }, ANIMATION_DURATION);
      return () => clearTimeout(hideTimer);
    }
  }, [isOpen]);

  if (!shouldMount) return null;

  return (
    <div
      className={`
        absolute top-full left-0 right-0 z-10
        bg-bg-card rounded-lg border border-border
        shadow-default overflow-hidden
        w-fit min-w-full 
        whitespace-nowrap
        transition-all ease-out
        ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
      style={{
        marginTop: `${gap}px`,
        transitionDuration: `${ANIMATION_DURATION}ms`,
      }}
      ref={contentRef}
    >
      {children}
    </div>
  );
};
