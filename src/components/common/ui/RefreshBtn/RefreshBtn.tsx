'use client';

import { useRouter } from 'next/navigation';
import { FaArrowRotateRight } from 'react-icons/fa6';

import { Button } from '../Button/Button';

export const RefreshBtn = () => {
  const router = useRouter();

  const refresh = () => {
    router.refresh();
  };

  return (
    <Button variant="navEdit" onClick={refresh}>
      <FaArrowRotateRight size={12} />
    </Button>
  );
};
