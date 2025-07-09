import { useState } from 'react';
import { FaBars, FaBoxArchive, FaHouse, FaPenToSquare, FaStar } from 'react-icons/fa6';

import { NavItem } from '@/components/NavItem/NavItem';

import { FullNavBar } from '../FullNavBar/FullNavBar';

export const DesktopNavBar = () => {
  const [isFull, setIsFull] = useState(false);

  const toggle = () => {
    setIsFull((prev) => !prev);
  };

  if (isFull) {
    return <FullNavBar toggle={toggle} isMobile={false} />;
  }

  return (
    <nav className="h-dvh bg-bg-panel w-12 border-r border-r-border p-2 flex flex-col justify-between z-20">
      <div>
        <div className="mb-4">
          <button className="p-2 rounded-md hover:bg-btn-subtle cursor-pointer" onClick={toggle}>
            <FaBars size={16} className="text-subtle" />
          </button>
        </div>
        <div className="flex flex-col gap-1 pb-2">
          <NavItem icon={<FaHouse className="text-secondary opacity-80" />} />
          <NavItem icon={<FaStar className="text-secondary opacity-80" />} />
          <NavItem icon={<FaBoxArchive className="text-secondary opacity-80" />} />
        </div>
      </div>
      <div>
        <NavItem icon={<FaPenToSquare className="text-btn-accent" />} />
      </div>
    </nav>
  );
};
