import { Title } from '@/components/common/ui/Title/Title';
import { Txt } from '@/components/common/ui/Txt/Txt';

interface Props {
  description?: string;
}

export const JoinHeader = ({ description }: Props) => {
  return (
    <div className="flex flex-col justify-center items-start gap-4 py-12">
      <Title>회원가입</Title>
      {description && <Txt variant="caption">{description}</Txt>}
    </div>
  );
};
