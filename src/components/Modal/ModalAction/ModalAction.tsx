import { FocusTrap } from 'focus-trap-react';

interface Props {
  children: React.ReactNode;
}

export const ModalAction = ({ children }: Props) => {
  return (
    <FocusTrap>
      <div className={`flex w-full gap-2`}>{children}</div>
    </FocusTrap>
  );
};
