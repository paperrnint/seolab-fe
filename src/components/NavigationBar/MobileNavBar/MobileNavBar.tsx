import Image from 'next/image';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa6';

import { FullNavBar } from '../FullNavBar/FullNavBar';
import { MobileNavRightBtn } from '../MobileNavRightBtn/MobileNavRightBtn';

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
      <div className="h-12 w-full grid grid-cols-3 items-center p-2 border-b border-b-border z-20 bg-bg-body">
        <div className="flex justify-start items-center">
          <button className="p-2 rounded-md hover:bg-btn-subtle cursor-pointer" onClick={toggle}>
            <FaBars size={16} className="text-subtle" />
          </button>
        </div>

        <div className="flex justify-center items-center">
          <Image src="/images/seolab-logo.png" width={80} height={15} alt="로고" />
        </div>

        <div className="flex justify-end items-center">
          <MobileNavRightBtn />
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
