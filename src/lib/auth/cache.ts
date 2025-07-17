import { getTokenExp } from './decode';

interface TokenCache {
  accessToken: string;
  refreshToken: string;
  expires: number;
}

const tokenCache = new Map<string, TokenCache>();

export const getCachedToken = (refreshToken: string) => {
  const cache = tokenCache.get(refreshToken);

  if (!cache) {
    return null;
  }

  console.log('--- cache.expires:', cache.expires);
  console.log('--- Date.now():', Date.now() + 60 * 1000);
  console.log('--- diff (s):', Math.floor((cache.expires - (Date.now() + 60 * 1000)) / 1000));

  if (cache.expires <= Date.now() + 60 * 1000) {
    tokenCache.delete(refreshToken);
    return null;
  }

  return cache.accessToken;
};

export const setCachedToken = (refreshToken: string, accessToken: string) => {
  const exp = getTokenExp(accessToken);
  if (exp) {
    tokenCache.set(refreshToken, {
      accessToken,
      refreshToken,
      expires: exp,
    });
  }
};

export const clearTokenCache = (refreshToken: string) => {
  tokenCache.delete(refreshToken);
};
