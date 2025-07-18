import { Txt } from '@/components/Txt/Txt';

interface Props {
  children: React.ReactNode;
}

export const RecommendTitle = ({ children }: Props) => {
  return (
    <div className="pb-3">
      <Txt variant="bold">{children}</Txt>
    </div>
  );
};
