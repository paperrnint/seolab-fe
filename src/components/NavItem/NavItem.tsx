interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  selected?: boolean;
  icon?: React.ReactNode;
}

export const NavItem = ({ children, icon, selected, ...props }: Props) => {
  return (
    <a
      className={`
        flex gap-2 items-center w-full h-8 px-2 rounded-sm cursor-pointer
        ${selected ? 'bg-bg-selected' : 'bg-transparent hover:bg-bg-hover'}
      `}
      {...props}
    >
      {icon && <div className="flex-shrink-0">{icon}</div>}
      {children && <div className="truncate text-primary">{children}</div>}
    </a>
  );
};
