interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export const LoginForm = ({ children }: Props) => {
  return <form className="flex flex-col gap-3 w-full">{children}</form>;
};
