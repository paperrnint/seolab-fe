import { Txt } from '../Txt/Txt';
import { UserAvatar } from '../UserAvatar/UserAvatar';

interface Props {
  nickname?: string;
  email?: string;
}

export const UserProfile = ({ nickname = '익명 (로그아웃 된 상태)', email = '이메일' }: Props) => {
  return (
    <div className="flex gap-2 items-center">
      <UserAvatar />
      <div className="overflow-hidden text-left">
        <Txt variant="bold" truncated>
          {nickname}
        </Txt>
        <Txt variant="muted" truncated>
          {email}
        </Txt>
      </div>
    </div>
  );
};
