import { Button } from '@/components/common/ui/Button/Button';

import { useQuoteInput } from '../@context/QuoteInputContext';

interface Props {
  children: React.ReactNode;
  onCancel?: () => void;
}

export const CancelButton = ({ children, onCancel }: Props) => {
  const { reset } = useQuoteInput();

  const cancel = () => {
    reset();
    onCancel?.();
  };

  return (
    <Button variant="subtle" size="xs" shape="square" width="fit" align="center" outline={false} onClick={cancel}>
      {children}
    </Button>
  );
};
