interface Props {
  children: React.ReactNode;
}

export const ModalContent = ({ children }: Props) => {
  return <div className={`mb-6 text-center whitespace-pre-wrap`}>{children}</div>;
};
