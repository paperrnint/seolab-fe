import { useState } from 'react';

import { NavMenu } from '@/components/layout/NavMenu/NavMenu';
import { TooltipContainer } from '@/components/modal/TooltipContainer/TooltipContainer';
import { UserProfileMenu } from '@/components/user/UserProfileMenu/UserProfileMenu';

import { NavToggleBtn } from '../../NavToggleBtn/NavToggleBtn';
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
          <TooltipContainer text="메뉴 열기" showTooltip>
            <NavToggleBtn onClick={toggle} />
          </TooltipContainer>
        </div>
        <NavMenu showLabel={false} />
      </div>
      <div>
        <div className="mb-2 h-9 flex items-center">
          <UserProfileMenu isFull={false} />
        </div>
      </div>
    </nav>
  );
};
