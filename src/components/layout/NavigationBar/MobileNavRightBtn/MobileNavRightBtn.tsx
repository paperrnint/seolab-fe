import { usePathname } from 'next/navigation';

import { SmallButton } from '@/components/common/ui/SmallButton/SmallButton';
import { NavMenuItem } from '@/components/layout/NavMenuItem/NavMenuItem';
import { useBookMode } from '@/hooks';

export const MobileNavRightBtn = () => {
  const { isEditMode, onEdit, onConfirm } = useBookMode();
  const pathname = usePathname();
  const isBookPage = pathname.startsWith('/book');

  if (isBookPage && !isEditMode) {
    return (
      <SmallButton variant="subtle" onClick={onEdit}>
        수정
      </SmallButton>
    );
  }

  if (isBookPage && isEditMode) {
    return (
      <SmallButton variant="primary" onClick={onConfirm}>
        확인
      </SmallButton>
    );
  }

  return (
    <div>
      <NavMenuItem type="new" />
    </div>
  );
};
