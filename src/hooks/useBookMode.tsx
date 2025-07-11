import { useAtom } from 'jotai';

import { bookModeAtom } from '@/atoms/bookAtom';

export const useBookMode = () => {
  const [mode, setMode] = useAtom(bookModeAtom);
  const isReadMode = mode === 'read';
  const isEditMode = mode === 'edit';

  const onEdit = () => {
    setMode('edit');
  };

  const onConfirm = () => {
    // @todo: send to server
    setMode('read');
  };

  return { mode, isReadMode, isEditMode, onEdit, onConfirm };
};
