import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';

import { Button } from '@/components/common/ui/Button/Button';

import { useDropdown } from '../@context/DropdownContext';

import { selectTriggerConfig, SelectTriggerVariant } from './DropdownSelectTrigger.constant';

interface Props {
  variant?: SelectTriggerVariant;
  selectedLabel?: string;
  placeholder?: string;
}

export const DropdownSelectTrigger = ({ variant = 'default', selectedLabel, placeholder = '선택' }: Props) => {
  const { isOpen, onToggle, triggerRef } = useDropdown();
  const style = selectTriggerConfig[variant];

  return (
    <div ref={triggerRef}>
      <Button
        variant={style.btnVariant}
        size={style.btnSize}
        shape="circular"
        width="fit"
        align="left"
        outline={false}
        rightIcon={isOpen ? <FaAngleUp size={style.iconSize} /> : <FaAngleDown size={style.iconSize} />}
        onClick={onToggle}
      >
        {selectedLabel || placeholder}
      </Button>
    </div>
  );
};
