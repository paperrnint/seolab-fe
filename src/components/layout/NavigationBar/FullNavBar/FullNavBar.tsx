import { Logo } from '@/components/common/ui/Logo/Logo';
import { NavMenu } from '@/components/layout/NavMenu/NavMenu';
import { NavToggleBtn } from '@/components/layout/NavToggleBtn/NavToggleBtn';
import { TooltipContainer } from '@/components/modal/TooltipContainer/TooltipContainer';
import { UserProfileMenu } from '@/components/user/UserProfileMenu/UserProfileMenu';

import { BottomSection } from '../BottomSection/BottomSection';

interface Props {
  toggle: () => void;
  isMobile: boolean;
}

export const FullNavBar = ({ toggle, isMobile }: Props) => {
  const widthClass = isMobile ? 'w-3/4 fixed top-0 left-0 bottom-0 z-50' : 'relative w-60 max-60';

  return (
    <nav
      className={`
        h-dvh bg-bg-panel overflow-hidden
        border-r border-r-border
        flex flex-col flex-shrink-0 
        ${widthClass}
      `}
    >
      {/* Header */}
      <div>
        <div className="flex gap-1 p-2 items-center">
          <TooltipContainer text="메뉴 접기">
            <NavToggleBtn onClick={toggle} />
          </TooltipContainer>
          <Logo size="sm" />
        </div>
      </div>

      {/* Navigation */}
      <div className="m-2 mb-0 flex-1">
        <NavMenu showLabel />
      </div>

      {/* User */}
      <BottomSection>
        <UserProfileMenu />
      </BottomSection>
    </nav>
  );
};
