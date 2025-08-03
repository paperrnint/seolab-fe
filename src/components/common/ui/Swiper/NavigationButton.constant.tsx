import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export const navigationBtnConfig = {
  prev: {
    position: 'left-1',
    translate: '-translate-x-2',
    icon: <FaChevronLeft size={12} className="text-subtle" />,
  },
  next: {
    position: 'right-1',
    translate: 'translate-x-2',
    icon: <FaChevronRight size={12} className="text-subtle" />,
  },
} as const;
