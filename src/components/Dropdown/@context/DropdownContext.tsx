'use client';

import { DropdownOption } from '@/types';
import { createContext, RefObject, useContext } from 'react';

export interface DropdownContextValue {
  isOpen: boolean;
  selectedOption: DropdownOption | null;
  contentRef: RefObject<HTMLDivElement | null>;
  onToggle: () => void;
  onClose: () => void;
  onSelect: (option: DropdownOption) => void;
}

export const DropdownContext = createContext<DropdownContextValue | null>(null);

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('Dropdown components must be used within Dropdown.Root');
  }
  return context;
};
