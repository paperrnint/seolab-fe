import { usePathname } from 'next/navigation';
import { FaPenToSquare } from 'react-icons/fa6';

import { Button } from '@/components/Button/Button';
import { NavItem } from '@/components/NavItem/NavItem';
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
      <NavItem icon={<FaPenToSquare size={16} className="text-subtle" />} />
    </div>
  );
};
