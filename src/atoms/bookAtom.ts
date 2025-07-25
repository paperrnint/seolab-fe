import { atom } from 'jotai';

import { BookMode } from '@/types/ui/book';

export const bookModeAtom = atom<BookMode>('read');
export const showQuotePageAtom = atom(true);
