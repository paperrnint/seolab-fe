import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaPenToSquare } from 'react-icons/fa6';

import { NavItem } from '@/components/NavItem/NavItem';

import { FullNavBar } from '../FullNavBar/FullNavBar';

export const MobileNavBar = () => {
  const [isFull, setIsFull] = useState(false);

  const toggle = () => {
    setIsFull((prev) => !prev);
  };

  const close = () => {
    setIsFull(false);
  };

  return (
    <>
      <div className="h-12 w-full flex items-center justify-between p-2 border-b border-b-border z-20 bg-bg-body">
        <button className="p-2 rounded-md hover:bg-btn-subtle cursor-pointer" onClick={toggle}>
          <FaBars size={16} className="text-subtle" />
        </button>
        <div>
          <Image src="/images/seolab-logo.png" width={80} height={18} alt="로고" />
        </div>
        <div>
          <NavItem icon={<FaPenToSquare size={16} className="text-subtle" />} />
        </div>
      </div>
      {isFull && (
        <>
          <div className="fixed inset-0 backdrop-blur-sm z-10" onClick={close} />
          <FullNavBar toggle={toggle} isMobile={true} />
        </>
      )}
    </>
  );
};
