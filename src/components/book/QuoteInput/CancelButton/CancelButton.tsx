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
    <Button variant="cancel" onClick={cancel}>
      {children}
    </Button>
  );
};
