import { FaEllipsisVertical } from 'react-icons/fa6';

import { useDropdown } from '../@context/DropdownContext';

export const DropdownMoreTrigger = () => {
  const { onToggle } = useDropdown();

  return (
    <button className="hover:opacity-60 py-2 px-0 rounded-md cursor-pointer" onClick={onToggle} aria-label="더보기">
      <FaEllipsisVertical className="text-subtle" />
    </button>
  );
};
