import { Button } from '../Button/Button';

import { ModalButtonVariant, ModalButtonVariantConfig } from './ModalButton.constant';

interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  children?: React.ReactNode;
  variant: ModalButtonVariant;
  disabled?: boolean;
}

export const ModalButton = ({ children, variant, disabled, ...props }: Props) => {
  if (variant === 'full') {
    return (
      <Button
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
  }

  return (
    <Button
      variant={ModalButtonVariantConfig[variant]}
      size="md"
      shape="square"
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
