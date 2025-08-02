import { FaEllipsisVertical } from 'react-icons/fa6';

import { useDropdown } from '../@context/DropdownContext';

interface Props {
  size?: 'sm' | 'md';
}

export const DropdownMoreTrigger = ({ size = 'md' }: Props) => {
  const { onToggle, triggerRef } = useDropdown();
  const sizeClass = size === 'md' ? 'text-sm' : 'text-xs';

  return (
    <div ref={triggerRef}>
      <button className="hover:opacity-60 py-2 px-0 rounded-md cursor-pointer" onClick={onToggle} aria-label="더보기">
        <FaEllipsisVertical className={`text-subtle ${sizeClass}`} />
      </button>
    </div>
  );
};
