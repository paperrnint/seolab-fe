import { useRouter } from 'next/navigation';
import { FaArrowRightFromBracket, FaEllipsisVertical } from 'react-icons/fa6';

import { useAuth } from '@/hooks/auth';

import { Dropdown } from '../Dropdown/Dropdown';
import { MoreItem } from '../MoreItem/MoreItem';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import { UserProfile } from '../UserProfile/UserProfile';

interface Props {
  isFull?: boolean;
}

export const UserProfileMenu = ({ isFull = true }: Props) => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const onClick = async () => {
    await logout();
    router.push('/login');
  };

  if (!user) return null;

  return (
    <Dropdown.Root>
      <Dropdown.Trigger asChild>
        {isFull ? (
          <button className="flex justify-between items-center w-full cursor-pointer">
            <UserProfile email={user?.email} nickname={user?.username} />
            <FaEllipsisVertical className="text-subtle -mr-1" />
          </button>
        ) : (
          <button className="cursor-pointer">
            <UserAvatar />
          </button>
        )}
      </Dropdown.Trigger>
      <Dropdown.Content align="left" position="top" width="fit">
        <Dropdown.Item onClick={onClick}>
          <MoreItem icon={<FaArrowRightFromBracket />}>로그아웃</MoreItem>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
};
