import { BackLine } from '@/components/common/ui/BackLine/BackLine';

interface Props {
  children: React.ReactNode;
  label?: string;
}

export const LoginSocial = ({ children, label = '또는' }: Props) => {
  return (
    <div>
      <div className="mt-12 mb-6">
        <BackLine>{label}</BackLine>
      </div>
      <div className="flex gap-6 justify-center mb-6">{children}</div>
    </div>
  );
};
