import { Button } from '@/components/common/ui/Button/Button';

import { useQuoteInput } from '../@context/QuoteInputContext';

interface Props {
  children: React.ReactNode;
}

export const SubmitButton = ({ children }: Props) => {
  const { submit } = useQuoteInput();

  return (
    <Button variant="accent" size="xs" shape="square" width="fit" align="center" outline={false} onClick={submit}>
      {children}
    </Button>
  );
};
