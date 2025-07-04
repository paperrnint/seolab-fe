interface Props {
  children: React.ReactNode;
}

export const LoginContainer = ({ children }: Props) => {
  return <div className="w-full max-w-84 py-2 md:py-10 flex-shrink-0">{children}</div>;
};
