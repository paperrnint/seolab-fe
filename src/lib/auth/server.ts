import { cookies as getCookies, headers as getHeaders } from 'next/headers';

import { CurrentUserResponse } from '@/types/api/auth';

import { fetchData } from '../fetch/fetchData';

export const getServerAuthData = async () => {
  const cookies = await getCookies();
  const headers = await getHeaders();

  const refreshToken = cookies.get('refreshToken')?.value;
  const accessToken = headers.get('x-access-token');

  if (!refreshToken || !accessToken) {
    return null;
  }

  try {
    const user = await fetchData<CurrentUserResponse>('/api/auth/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return {
      accessToken,
      ...user,
    };
  } catch (err) {
    console.error('user data fetch 실패', err);
    return null;
  }
};
