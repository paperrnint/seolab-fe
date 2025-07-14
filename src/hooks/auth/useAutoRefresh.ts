'use client';

import { useEffect, useRef } from 'react';

import { REFRESH_TOKEN_INTERVAL_TIME } from '@/constants';

import { useAuth } from './useAuth';

export const useAutoRefresh = () => {
  const { refreshAccessToken, isAuthenticated } = useAuth();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // refresh interval 주기로 refresh token
  useEffect(() => {
    if (!isAuthenticated) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(async () => {
      await refreshAccessToken();
      console.log('refresh token 성공! (주기)');
    }, REFRESH_TOKEN_INTERVAL_TIME);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAuthenticated, refreshAccessToken]);

  // focus 시 refresh token
  useEffect(() => {
    const refresh = async () => {
      if (isAuthenticated) {
        await refreshAccessToken();
        console.log('refresh token 성공! (포커스)');
      }
    };

    window.addEventListener('focus', refresh);
    return () => window.removeEventListener('focus', refresh);
  }, [isAuthenticated, refreshAccessToken]);
};
