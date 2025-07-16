'use client';

import { useAtom, useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { accessTokenAtom, isAuthenticatedAtom, isLoggedInAtom, userAtom } from '@/atoms/authAtom';
import { LoginFormData } from '@/lib/schemas/loginSchema';
import { authService } from '@/services/authService';
import { ApiResult } from '@/types/api/result';
import { User } from '@/types/user/user';

export const useAuth = () => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [user, setUser] = useAtom(userAtom);
  const isAuthenticated = useAtomValue(isAuthenticatedAtom);
  const router = useRouter();

  const setAuth = useCallback(
    (user: User) => {
      setUser(user);
      setIsLoggedIn(true);
    },
    [setIsLoggedIn, setUser]
  );

  const resetAuth = useCallback(() => {
    setAccessToken(null);
    setUser(null);
    setIsLoggedIn(false);
    router.push('/login');
  }, [router, setAccessToken, setIsLoggedIn, setUser]);

  const login: (formData: LoginFormData) => Promise<ApiResult> = useCallback(
    async (formData: LoginFormData) => {
      try {
        const data = await authService.login(formData);
        const { accessToken, email, username } = data;

        setAccessToken(accessToken);
        setAuth({ email, username });

        return { success: true };
      } catch (err) {
        return {
          success: false,
          error: (err as Error).message,
        };
      }
    },
    [setAccessToken, setAuth]
  );

  const logout = useCallback(async () => {
    if (!accessToken) {
      resetAuth();
      return;
    }

    try {
      await authService.logout(accessToken);
      console.log('로그아웃 성공');
    } catch (err) {
      console.error((err as Error).message);
    } finally {
      resetAuth();
    }
  }, [accessToken, resetAuth]);

  return {
    accessToken,
    user,
    isLoggedIn,
    isAuthenticated,
    setAuth,
    login,
    logout,
  };
};
