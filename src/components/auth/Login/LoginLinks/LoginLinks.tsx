interface Props {
  children: React.ReactNode;
}

export const LoginLinks = ({ children }: Props) => {
  return <ul className="flex items-center justify-center divide-x divide-border my-5">{children}</ul>;
};
