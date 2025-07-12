import { Txt } from '../Txt/Txt';
import { UserAvatar } from '../UserAvatar/UserAvatar';

interface Props {
  nickname: string;
  email: string;
}

export const UserProfile = ({ nickname, email }: Props) => {
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
