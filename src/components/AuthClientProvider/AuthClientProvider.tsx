'use client';

import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { accessTokenAtom } from '@/atoms/authAtom';
import { useAuth } from '@/hooks/auth';
import { LoginResponse } from '@/types/api/auth';

interface Props {
  children: React.ReactNode;
  initialAuthData: LoginResponse | null;
}

export const AuthClientProvider = ({ children, initialAuthData }: Props) => {
  const { setAuth } = useAuth();
  const setAccessToken = useSetAtom(accessTokenAtom);

  useEffect(() => {
    if (!initialAuthData) {
      console.log('no initial auth data');
      return;
    }

    const { accessToken, email, username } = initialAuthData;
    setAccessToken(accessToken);
    setAuth({ email, username });
  }, [initialAuthData, setAccessToken, setAuth]);

  return <>{children}</>;
};
