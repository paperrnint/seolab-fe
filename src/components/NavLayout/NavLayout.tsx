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
    return (
      <div className="flex h-dvh pr-0.5">
        <div className="w-12 border-r border-r-border bg-bg-panel"></div>
        <div className="flex-1 flex justify-center p-4">{children}</div>
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="h-dvh pr-0.5">
        <MobileNavBar />
        <div
          className="overflow-y-auto flex-1 flex justify-center h-full p-4"
          style={{ height: 'calc(100dvh - 48px)' }}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-dvh pr-0.5">
      <DesktopNavBar />
      <div className="overflow-y-auto flex-1 flex justify-center p-4">{children}</div>
    </div>
  );
};
