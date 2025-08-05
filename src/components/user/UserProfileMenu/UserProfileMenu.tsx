import { FaArrowRightFromBracket, FaEllipsisVertical } from 'react-icons/fa6';

import { useAuth } from '@/hooks';

import { Dropdown } from '../../common/ui/Dropdown/Dropdown';
import { DropdownLabel } from '../../common/ui/Dropdown/DropdownLabel/DropdownLabel';
import { UserAvatar } from '../../common/ui/UserAvatar/UserAvatar';
import { UserProfile } from '../UserProfile/UserProfile';

interface Props {
  isFull?: boolean;
}

export const UserProfileMenu = ({ isFull = true }: Props) => {
  const { user, logout } = useAuth();

  const onClick = async () => {
    await logout();
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
          <DropdownLabel icon={<FaArrowRightFromBracket />}>로그아웃</DropdownLabel>
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
};
