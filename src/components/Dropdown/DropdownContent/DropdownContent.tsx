'use client';

import { useEffect, useState } from 'react';

import { ANIMATION_DURATION } from '@/constants';

import { useDropdown } from '../@context/DropdownContext';

interface Props {
  children: React.ReactNode;
  gap?: number;
  align?: 'left' | 'right';
}

export const DropdownContent = ({ children, gap = 8, align = 'left' }: Props) => {
  const { isOpen, contentRef } = useDropdown();
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

  const getAlignmentClasses = () => {
    switch (align) {
      case 'right':
        return 'right-0';
      case 'left':
      default:
        return 'left-0';
    }
  };

  return (
    <div
      className={`
        absolute top-full z-10
        bg-bg-card rounded-lg border border-border
        shadow-default overflow-hidden
        ${getAlignmentClasses()}
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
