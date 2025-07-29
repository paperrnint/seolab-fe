import { MdFace } from 'react-icons/md';

interface Props {
  text?: string;
}

export const UserAvatar = ({ text }: Props) => {
  return (
    <div className="rounded-full bg-white border border-border w-8 h-8 flex-shrink-0 flex justify-center items-center font-bold">
      {text ? text[0] : <MdFace size={16} className="text-secondary" />}
    </div>
  );
};
