'use client';

import type { DropdownOption } from '@/types';
import { useEffect, useRef, useState } from 'react';
import { DropdownContext } from '../@context/DropdownContext';

interface Props {
  children: React.ReactNode;
  defaultOption?: DropdownOption | null;
}

export const DropdownRoot = ({ children, defaultOption = null }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (contentRef.current && !contentRef.current.contains(e.target as Node)) {
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

  const onSelect = (option: DropdownOption) => {
    setSelectedOption(option);
    // @todo : onValueChange(value)
    onClose();
  };
  return (
    <DropdownContext.Provider value={{ isOpen, selectedOption, contentRef, onToggle, onClose, onSelect }}>
      <div className="relative w-fit">{children}</div>
    </DropdownContext.Provider>
  );
};
