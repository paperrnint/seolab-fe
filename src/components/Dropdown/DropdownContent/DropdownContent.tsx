'use client';

import { useDropdown } from '../@context/DropdownContext';

interface Props {
  children: React.ReactNode;
  gap?: number;
}

export const DropdownContent = ({ children, gap = 8 }: Props) => {
  const { isOpen, contentRef, onClose } = useDropdown();

  if (!isOpen) return null;

  return (
    <div
      className="
        absolute top-full left-0 right-0 z-10
        bg-bg-card rounded-lg border border-border
        shadow-default overflow-hidden
        w-fit min-w-full 
        whitespace-nowrap
      "
      style={{ marginTop: `${gap}px` }}
      ref={contentRef}
    >
      {children}
    </div>
  );
};
