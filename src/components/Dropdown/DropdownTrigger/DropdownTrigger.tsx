'use client';

import { Button } from '@/components/Button/Button';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import { useDropdown } from '../@context/DropdownContext';

interface Props {
  placeholder?: string;
}

export const DropdownTrigger = ({ placeholder = '선택' }: Props) => {
  const { isOpen, selectedOption, onToggle } = useDropdown();

  return (
    <Button
      variant="dropdown"
      rightIcon={isOpen ? <FaAngleUp size={10} /> : <FaAngleDown size={10} />}
      onClick={onToggle}
    >
      {selectedOption?.label || placeholder}
    </Button>
  );
};
