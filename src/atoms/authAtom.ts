import { atom } from 'jotai';

import { User } from '@/types/domain/auth';

export const accessTokenAtom = atom<string | null>(null);
export const isLoggedInAtom = atom<boolean>(false);
export const userAtom = atom<User | null>(null);

export const isAuthenticatedAtom = atom((get) => {
  const token = get(accessTokenAtom);
  const isLoggedIn = get(isLoggedInAtom);
  return !!token && isLoggedIn;
});
