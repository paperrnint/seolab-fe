'use client';

import { DropdownOption } from '@/types/ui/common';

import { useDropdown } from '../@context/DropdownContext';

import { selectableItemConfig, SelectableItemVariant } from './DropdownSelectableItem.constant';

interface Props<T extends DropdownOption = DropdownOption> {
  children: React.ReactNode;
  variant?: SelectableItemVariant;
  value: string;
  icon?: React.ReactNode;
  onSelect?: (option: T) => void;
}

export const DropdownSelectableItem = <T extends DropdownOption = DropdownOption>({
  children,
  variant = 'default',
  value,
  icon,
  onSelect,
}: Props<T>) => {
  const { onClose } = useDropdown();
  const label = typeof children === 'string' ? children : value;
  const style = selectableItemConfig[variant];

  const onClick = () => {
    const option = { value, label } as T;
    onSelect?.(option);
    onClose();
  };

  return (
    <button
      className={`
        flex gap-2 items-center 
        w-full ${style.spacing}
        cursor-pointer hover:bg-bg-hover/60
      `}
      onClick={onClick}
    >
      {icon && icon}
      <div className={`text-primary ${style.text}`}>{children}</div>
    </button>
  );
};
