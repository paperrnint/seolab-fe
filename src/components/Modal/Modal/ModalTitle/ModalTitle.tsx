import { Title } from '@/components/common/ui/Title/Title';

interface Props {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const ModalTitle = ({ children, icon }: Props) => {
  return (
    <div className={`w-full my-4 text-center`}>
      <div className="flex flex-col gap-4 w-full">
        {icon && <div className="flex justify-center items-center text-4xl text-subtle">{icon}</div>}
        <Title>{children}</Title>
      </div>
    </div>
  );
};
