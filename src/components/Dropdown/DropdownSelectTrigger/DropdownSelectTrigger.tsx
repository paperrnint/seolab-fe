import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

import { Button } from '@/components/Button/Button';

import { useDropdown } from '../@context/DropdownContext';

interface Props {
  selectedLabel?: string;
  placeholder?: string;
}

export const DropdownSelectTrigger = ({ selectedLabel, placeholder = '선택' }: Props) => {
  const { isOpen, onToggle } = useDropdown();

  return (
    <Button
      variant="dropdown"
      rightIcon={isOpen ? <FaAngleUp size={10} /> : <FaAngleDown size={10} />}
      onClick={onToggle}
    >
      {selectedLabel || placeholder}
    </Button>
  );
};
