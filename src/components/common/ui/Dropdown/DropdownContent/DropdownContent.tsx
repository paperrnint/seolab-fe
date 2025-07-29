'use client';

import { useEffect, useState } from 'react';

import { ANIMATION_DURATION } from '@/constants';

import { useDropdown } from '../@context/DropdownContext';

import { Align, alignClasses, Position, positionClasses } from './DropdownContent.constant';

interface Props {
  children: React.ReactNode;
  gap?: number;
  align?: Align;
  position?: Position;
  width?: 'fit' | 'auto';
}

export const DropdownContent = ({ children, gap = 8, align = 'left', position = 'bottom', width = 'auto' }: Props) => {
  const { isOpen, contentRef } = useDropdown();
  const [shouldMount, setShouldMount] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  // 열림 : DOM mount -> visible (opacity 0 -> 1)
  // 닫힘 : invisible & DOM unmount
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
      setShouldMount(false);
    }
  }, [isOpen]);

  if (!shouldMount) return null;

  const getMarginStyle = () => {
    switch (position) {
      case 'top':
        return { marginBottom: `${gap}px` };
      case 'bottom':
      default:
        return { marginTop: `${gap}px` };
    }
  };

  return (
    <div
      className={`
        absolute z-10
        bg-bg-card rounded-lg border border-border
        shadow-default overflow-hidden
        ${alignClasses[align]}
        ${positionClasses[position]}
        w-fit ${width === 'auto' && 'min-w-full'}
        whitespace-nowrap
        transition-all ease-out
        ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
      style={{
        ...getMarginStyle(),
        transitionDuration: `${ANIMATION_DURATION}ms`,
      }}
      ref={contentRef}
    >
      {children}
    </div>
  );
};
