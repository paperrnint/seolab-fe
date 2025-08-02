'use client';

import { createContext, RefObject, useContext } from 'react';

export interface DropdownContextValue {
  isOpen: boolean;
  contentRef: RefObject<HTMLDivElement | null>;
  triggerRef: RefObject<HTMLDivElement | null>;
  position: { top: number; left: number };
  onToggle: () => void;
  onClose: () => void;
}

export const DropdownContext = createContext<DropdownContextValue | null>(null);

export const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error('Dropdown components must be used within Dropdown.Root');
  }
  return context;
};
