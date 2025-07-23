import { getTokenExp } from './decode';

interface TokenCache {
  accessToken: string;
  expires: number;
}

// 단일 사용자용 간단한 캐시
let tokenCache: TokenCache | null = null;

export const getCachedToken = (): string | null => {
  if (!tokenCache) {
    return null;
  }

  console.log('--- cache.expires:', tokenCache.expires);
  console.log('--- Date.now():', Date.now() + 60 * 1000);
  console.log('--- diff (s):', Math.floor((tokenCache.expires - (Date.now() + 60 * 1000)) / 1000));

  if (tokenCache.expires <= Date.now() + 60 * 1000) {
    tokenCache = null;
    return null;
  }

  return tokenCache.accessToken;
};

export const setCachedToken = (accessToken: string): void => {
  const exp = getTokenExp(accessToken);
  if (exp) {
    tokenCache = {
      accessToken,
      expires: exp,
    };
  }
};

export const clearTokenCache = (): void => {
  tokenCache = null;
};
