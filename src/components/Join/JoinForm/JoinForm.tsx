interface Props {
  children: React.ReactNode;
}

export const JoinForm = ({ children }: Props) => {
  return <form className="flex flex-col justify-between h-full flex-1">{children}</form>;
};
