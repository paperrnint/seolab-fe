import { useState } from 'react';

import { NavMenu } from '@/components/NavMenu/NavMenu';
import { NavToggleBtn } from '@/components/NavToggleBtn/NavToggleBtn';
import { UserAvatar } from '@/components/UserAvatar/UserAvatar';

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
          <NavToggleBtn onClick={toggle} />
        </div>
        <NavMenu showLabel={false} />
      </div>
      <div>
        <div className="mb-2 h-9 flex items-center">
          <UserAvatar />
        </div>
      </div>
    </nav>
  );
};
