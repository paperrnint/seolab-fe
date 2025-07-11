import { atom } from 'jotai';

import { BookMode } from '@/types';

export const bookModeAtom = atom<BookMode>('read');
export const showQuotePageAtom = atom(true);
