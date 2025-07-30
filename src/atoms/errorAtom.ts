import { atom } from 'jotai';

import { ErrorState } from '@/types/ui/error';

export const errorAtom = atom<ErrorState | null>(null);
