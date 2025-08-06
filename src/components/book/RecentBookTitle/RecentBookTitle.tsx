'use client';

import { Txt } from '@/components/common/ui/Txt/Txt';
import { useAuth } from '@/hooks';

export const RecentBookTitle = () => {
  const { user } = useAuth();

  return <Txt variant="caption">{user?.username}님이 지금 읽고 있는 책</Txt>;
};
