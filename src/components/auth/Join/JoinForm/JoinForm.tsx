interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export const JoinForm = ({ children, ...props }: Props) => {
  return (
    <form className="flex flex-col justify-between h-full flex-1" {...props}>
      {children}
    </form>
  );
};
