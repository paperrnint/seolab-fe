import { Logo } from '@/components/Logo/Logo';
import { Txt } from '@/components/Txt/Txt';

interface Props {
  label?: string;
}
export const LoginHeader = ({ label }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-12">
      <Logo size="lg" />
      {label && <Txt variant="caption">{label}</Txt>}
    </div>
  );
};
