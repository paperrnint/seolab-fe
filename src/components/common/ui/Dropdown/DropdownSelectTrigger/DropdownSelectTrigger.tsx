import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

import { Button } from '@/components/common/ui/Button/Button';

import { useDropdown } from '../@context/DropdownContext';

interface Props {
  selectedLabel?: string;
  placeholder?: string;
}

export const DropdownSelectTrigger = ({ selectedLabel, placeholder = '선택' }: Props) => {
  const { isOpen, onToggle } = useDropdown();

  return (
    <Button
      variant="subtle"
      size="sm"
      shape="circular"
      width="fit"
      align="left"
      outline={false}
      rightIcon={isOpen ? <FaAngleUp size={10} /> : <FaAngleDown size={10} />}
      onClick={onToggle}
    >
      {selectedLabel || placeholder}
    </Button>
  );
};
