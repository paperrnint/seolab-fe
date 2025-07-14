import { useEffect } from 'react';

import { useAuth } from './useAuth';

export const useAuthInit = () => {
  const { initAuth } = useAuth();

  useEffect(() => {
    initAuth();
  }, [initAuth]);
};
