import { Button } from '../Button/Button';

interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  children?: React.ReactNode;
  disabled?: boolean;
}

export const FormSubmitButton = ({ children, disabled, ...props }: Props) => {
  return (
    <Button
      type="submit"
      variant="primary"
      size="xl"
      shape="rounded"
      width="full"
      align="center"
      outline={false}
      disabled={disabled}
      {...props}
    >
      {children}
    </Button>
  );
};
