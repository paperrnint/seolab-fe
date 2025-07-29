import { Button } from '@/components/common/ui/Button/Button';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const RecommendItem = ({ children, ...props }: Props) => {
  return (
    <Button variant="query" {...props}>
      {children}
    </Button>
  );
};
