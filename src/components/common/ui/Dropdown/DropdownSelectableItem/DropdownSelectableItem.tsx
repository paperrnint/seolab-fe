'use client';

import { DropdownOption } from '@/types/ui/common';

import { useDropdown } from '../@context/DropdownContext';

interface Props {
  children: React.ReactNode;
  value: string;
  icon?: React.ReactNode;
  onSelect?: (options: DropdownOption) => void;
}

export const DropdownSelectableItem = ({ children, value, icon, onSelect }: Props) => {
  const { onClose } = useDropdown();
  const label = typeof children === 'string' ? children : value;

  const onClick = () => {
    const option = { value, label };
    onSelect?.(option);
    onClose();
  };

  return (
    <button
      className="
        flex gap-2 items-center 
        w-full px-3 py-2 
        cursor-pointer hover:bg-bg-hover
      "
      onClick={onClick}
    >
      {icon && icon}
      <div className="text-primary text-xs">{children}</div>
    </button>
  );
};
