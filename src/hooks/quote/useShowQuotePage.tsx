import { useState } from 'react';

export const useShowQuotePage = () => {
  const [showQuotePage, setShowQuotePage] = useState(true);

  const onShow = () => {
    setShowQuotePage(true);
  };

  const onHide = () => {
    setShowQuotePage(false);
  };

  const onToggle = () => {
    setTimeout(() => {
      setShowQuotePage((prev) => !prev);
    }, 0);
  };

  return { showQuotePage, onShow, onHide, onToggle };
};
