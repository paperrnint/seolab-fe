interface Props {
  children: React.ReactNode;
}

export const NavMenuList = ({ children }: Props) => {
  return <ul className="flex flex-col gap-1 pb-2">{children}</ul>;
};
