import { Button } from '@/components/common/ui/Button/Button';

import { useQuoteInput } from '../@context/QuoteInputContext';

interface Props {
  children: React.ReactNode;
}

export const SubmitButton = ({ children }: Props) => {
  const { submit } = useQuoteInput();

  return (
    <Button variant="edit" onClick={submit}>
      {children}
    </Button>
  );
};
