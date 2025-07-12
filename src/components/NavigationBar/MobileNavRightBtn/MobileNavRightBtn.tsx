import { usePathname } from 'next/navigation';

import { Button } from '@/components/Button/Button';
import { NavMenuItem } from '@/components/NavMenuItem/NavMenuItem';
import { useBookMode } from '@/hooks/useBookMode';

export const MobileNavRightBtn = () => {
  const { mode, onEdit, onConfirm } = useBookMode();
  const pathname = usePathname();
  const isBookPage = pathname.startsWith('/book');

  if (isBookPage && mode === 'read') {
    return (
      <Button variant="navEdit" onClick={onEdit}>
        수정
      </Button>
    );
  }

  if (isBookPage && mode === 'edit') {
    return (
      <Button variant="navConfirm" onClick={onConfirm}>
        확인
      </Button>
    );
  }

  return (
    <div>
      <NavMenuItem type="new" />
    </div>
  );
};
