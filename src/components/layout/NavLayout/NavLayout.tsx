'use client';

import { useMediaQuery } from '@/hooks/useMediaQuery';

import { DesktopNavBar } from '../NavigationBar/DesktopNavBar/DesktopNavBar';
import { MobileNavBar } from '../NavigationBar/MobileNavBar/MobileNavBar';

interface Props {
  children: React.ReactNode;
}

export const NavLayout = ({ children }: Props) => {
  const { isMobile } = useMediaQuery();

  if (isMobile === null) {
    return null;
  }

  if (isMobile) {
    return (
      <div className="h-dvh pr-0.5">
        <MobileNavBar />
        <div className="overflow-y-auto flex-1 flex justify-center h-full" style={{ height: 'calc(100dvh - 48px)' }}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-dvh pr-0.5">
      <DesktopNavBar />
      <div className="overflow-y-auto flex-1 flex justify-center">{children}</div>
    </div>
  );
};
