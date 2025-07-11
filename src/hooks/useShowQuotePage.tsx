import { useAtom } from 'jotai';

import { showQuotePageAtom } from '@/atoms/bookAtom';

export const useShowQuotePage = () => {
  const [showQuotePage, setShowQuotePage] = useAtom(showQuotePageAtom);

  const onShow = () => {
    setShowQuotePage(true);
  };

  const onHide = () => {
    setShowQuotePage(false);
  };

  const onToggle = () => {
    setShowQuotePage((prev) => !prev);
  };

  return { showQuotePage, onShow, onHide, onToggle };
};
