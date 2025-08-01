import { Button } from '../Button/Button';

interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  children?: React.ReactNode;
  variant: 'primary' | 'secondary' | 'subtle';
  disabled?: boolean;
}

export const SmallButton = ({ children, variant, disabled, ...props }: Props) => {
  return (
    <Button
      variant={variant}
      size="xs"
      shape="circular"
      width="fit"
      align="center"
      outline={false}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  );
};
