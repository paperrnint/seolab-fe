import { ExternalGradient } from '@/components/ExternalGradient/ExternalGradient';

interface Props {
  children: React.ReactNode;
}

export const BottomBtn = ({ children }: Props) => {
  return (
    <div className="mb-2 mr-2 px-2">
      <ExternalGradient variant="top" bg="panel">
        <div className="py-2">
          <button className="w-full cursor-pointer">{children}</button>
        </div>
      </ExternalGradient>
    </div>
  );
};
