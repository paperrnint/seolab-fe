'use client';

import { useDropdown } from '../@context/DropdownContext';

interface Props {
  children: React.ReactNode;
  value: string;
  icon?: React.ReactNode;
}

export const DropdownItem = ({ children, value, icon }: Props) => {
  const { selectedOption, onSelect } = useDropdown();
  const label = typeof children === 'string' ? children : value;
  const isSelected = selectedOption?.value === value; // @todo : 스타일링 변경

  const onClick = () => {
    const option = { value, label };
    onSelect(option);
    console.log(option);
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
