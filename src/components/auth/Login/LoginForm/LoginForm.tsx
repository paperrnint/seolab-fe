interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export const LoginForm = ({ children, ...props }: Props) => {
  return (
    <form className="flex flex-col gap-3 w-full" {...props}>
      {children}
    </form>
  );
};
