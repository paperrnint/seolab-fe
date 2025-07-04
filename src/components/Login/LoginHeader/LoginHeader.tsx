import { Txt } from '@/components/Txt/Txt';
import Image from 'next/image';

interface Props {
  label?: string;
}
export const LoginHeader = ({ label }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 py-12">
      <Image src="/images/seolab-logo.png" alt="서랍 로고" width={160} height={30} />
      {label && <Txt variant="caption">{label}</Txt>}
    </div>
  );
};
