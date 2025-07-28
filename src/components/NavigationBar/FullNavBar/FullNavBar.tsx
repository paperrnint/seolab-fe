import { Logo } from '@/components/Logo/Logo';
import { NavItem } from '@/components/NavItem/NavItem';
import { NavMenu } from '@/components/NavMenu/NavMenu';
import { NavToggleBtn } from '@/components/NavToggleBtn/NavToggleBtn';
import { TooltipContainer } from '@/components/TooltipContainer/TooltipContainer';
import { UserProfileMenu } from '@/components/UserProfileMenu/UserProfileMenu';

import { BottomSection } from '../BottomSection/BottomSection';
import { NavContent } from '../Content/Content';
import { NavContentSection } from '../ContentSection/ContentSection';
import { NavContentTitle } from '../ContentTitle/ContentTitle';

interface Props {
  toggle: () => void;
  isMobile: boolean;
}

export const FullNavBar = ({ toggle, isMobile }: Props) => {
  const RECENT_BOOK = {
    title: '내 문장이 그렇게 이상한가요? · 김정선',
    href: '/',
  };
  const RECENT_BOOKS = Array.from({ length: 13 }, () => RECENT_BOOK);
  const widthClass = isMobile ? 'w-3/4 fixed top-0 left-0 bottom-0 z-50' : 'relative w-3xs max-w-3xs';

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
      <div className="m-2 mb-0">
        <NavMenu showLabel />
      </div>

      {/* Recent Books */}
      <NavContentSection>
        <NavContentTitle title="최근 읽은 책" />
        <NavContent>
          <NavItem href="/">여름은 오래 그곳에 남아 · 마쓰이에 마사시</NavItem>
          <NavItem href="/">모순 · 양귀자</NavItem>
          {RECENT_BOOKS.map((book, i) => (
            <NavItem key={i} href={book.href}>
              {book.title}
            </NavItem>
          ))}
        </NavContent>
      </NavContentSection>

      {/* User */}
      <BottomSection>
        <UserProfileMenu />
      </BottomSection>
    </nav>
  );
};
