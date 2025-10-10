import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { deleteBookAction } from '@/lib/actions/book';

import { useError } from '../common';

export const useBookDelete = (bookId: string) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { showError } = useError();
  const router = useRouter();

  const showModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const deleteBook = async () => {
    const result = await deleteBookAction(bookId);
    if (!result.success) {
      showError('delete', result.error.status);
      return false;
    }
    return true;
  };

  const confirmDelete = async () => {
    const success = await deleteBook();
    closeModal();
    if (success) {
      router.replace('/home');
    }
  };

  return {
    isOpenModal,
    showModal,
    closeModal,
    confirmDelete,
  };
};
