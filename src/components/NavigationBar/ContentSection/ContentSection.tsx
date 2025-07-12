interface Props {
  children: React.ReactNode;
}

export const NavContentSection = ({ children }: Props) => {
  return <div className="flex-1 ml-2 mr-1 flex flex-col min-h-0">{children}</div>;
};
