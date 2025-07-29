interface Props {
  children: React.ReactNode;
}

export const NavContent = ({ children }: Props) => {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="flex flex-col gap-1 mt-2 pr-1 pb-5">{children}</div>
    </div>
  );
};
