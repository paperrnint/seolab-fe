interface Props {
  children: React.ReactNode;
}

export const JoinContainer = ({ children }: Props) => {
  return (
    <div className="w-full max-w-84 flex-shrink-0 my-0 mx-auto">
      <div className="flex flex-col h-dvh md:h-full md:min-h-[624px] py-4 md:py-10">{children}</div>
    </div>
  );
};
