interface Props {
  children: React.ReactNode;
}

export const ModalAction = ({ children }: Props) => {
  return <div className={`flex w-full gap-2 justify-end`}>{children}</div>;
};
