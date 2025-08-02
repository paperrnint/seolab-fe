'use client';

import { useEffect, useRef, useState } from 'react';

import { DropdownContext } from '../@context/DropdownContext';

interface Props {
  children: React.ReactNode;
}

export const DropdownRoot = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const isClickInsideTrigger = dropdownRef.current?.contains(target);
      const isClickInsideContent = contentRef.current?.contains(target);

      if (!isClickInsideTrigger && !isClickInsideContent) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', clickOutside);

    if (isOpen) {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        setPosition({
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
        });
      }
    }

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [isOpen]);

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <DropdownContext.Provider value={{ isOpen, contentRef, triggerRef, position, onToggle, onClose }}>
      <div className="relative" ref={dropdownRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};
