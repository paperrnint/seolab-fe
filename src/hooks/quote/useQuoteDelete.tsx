import { useState } from 'react';

import { deleteQuoteAction } from '@/lib/actions/book';

import { useError } from '../common/useError';

export const useQuoteDelete = (bookId: string, quoteId: string) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { showError } = useError();

  const showModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const deleteQuote = async () => {
    const result = await deleteQuoteAction(bookId, quoteId);
    if (!result.success) {
      showError('delete', result.error.status);
    }
  };

  const confirmDelete = async () => {
    await deleteQuote();
    closeModal();
  };

  return {
    isOpenModal,
    showModal,
    closeModal,
    confirmDelete,
  };
};
