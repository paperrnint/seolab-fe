import { useState } from 'react';

import { Logo } from '@/components/common/ui/Logo/Logo';
import { NavToggleBtn } from '@/components/layout/NavToggleBtn/NavToggleBtn';
import { TooltipContainer } from '@/components/modal/TooltipContainer/TooltipContainer';

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
          <TooltipContainer text="메뉴 열기">
            <NavToggleBtn onClick={toggle} />
          </TooltipContainer>
        </div>

        <div className="flex justify-center items-center">
          <Logo size="sm" />
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
