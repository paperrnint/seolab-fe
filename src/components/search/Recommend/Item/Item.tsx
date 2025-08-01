import { Button } from '@/components/common/ui/Button/Button';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const RecommendItem = ({ children, ...props }: Props) => {
  return (
    <Button variant="secondary" size="xs" shape="circular" width="fit" align="center" outline={true} {...props}>
      {children}
    </Button>
  );
};
