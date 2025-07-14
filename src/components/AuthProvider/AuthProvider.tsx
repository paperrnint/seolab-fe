'use client';

import { useAuthInit } from '@/hooks/auth/useAuthInit';
import { useAutoRefresh } from '@/hooks/auth/useAutoRefresh';

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  useAuthInit();
  useAutoRefresh();

  return <>{children}</>;
};
