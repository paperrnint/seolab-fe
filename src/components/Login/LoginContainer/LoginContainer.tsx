interface Props {
  children: React.ReactNode;
}

export const LoginContainer = ({ children }: Props) => {
  return <div className="w-full max-w-84 flex-shrink-0">{children}</div>;
};
