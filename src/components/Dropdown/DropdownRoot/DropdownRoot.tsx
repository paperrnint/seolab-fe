'use client';

import { useEffect, useRef, useState } from 'react';

import { DropdownContext } from '../@context/DropdownContext';

interface Props {
  children: React.ReactNode;
}

export const DropdownRoot = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', clickOutside);
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
    <DropdownContext.Provider value={{ isOpen, contentRef, onToggle, onClose }}>
      <div className="relative w-fit" ref={dropdownRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};
