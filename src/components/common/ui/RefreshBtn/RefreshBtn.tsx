'use client';

import { useRouter } from 'next/navigation';
import { FaArrowRotateRight } from 'react-icons/fa6';

import { SmallButton } from '../SmallButton/SmallButton';

export const RefreshBtn = () => {
  const router = useRouter();

  const refresh = () => {
    router.refresh();
  };

  return (
    <SmallButton variant="subtle" onClick={refresh}>
      <FaArrowRotateRight size={12} />
    </SmallButton>
  );
};
