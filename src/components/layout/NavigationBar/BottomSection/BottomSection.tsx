import { ExternalGradient } from '@/components/common/effects/ExternalGradient/ExternalGradient';

interface Props {
  children: React.ReactNode;
}

export const BottomSection = ({ children }: Props) => {
  return (
    <div className="mb-2 mr-2 px-2">
      <ExternalGradient variant="top" bg="panel">
        <div className="py-2">{children}</div>
      </ExternalGradient>
    </div>
  );
};
