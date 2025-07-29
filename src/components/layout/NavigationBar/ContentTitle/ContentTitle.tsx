import { ExternalGradient } from '@/components/common/effects/ExternalGradient/ExternalGradient';

interface Props {
  title: string;
}

export const NavContentTitle = ({ title }: Props) => {
  return (
    <div className="mr-2">
      <ExternalGradient variant="bottom" bg="panel" height={16}>
        <div className="flex-shrink-0 m-2 mb-0 text-subtle text-[10px]">{title}</div>
      </ExternalGradient>
    </div>
  );
};
