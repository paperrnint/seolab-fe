import Link from 'next/link';
import { ComponentProps } from 'react';

interface Props extends ComponentProps<typeof Link> {
  children?: React.ReactNode;
  selected?: boolean;
  icon?: React.ReactNode;
  isAccent?: boolean;
}

export const NavItem = ({ children, icon, selected = false, isAccent = false, ...props }: Props) => {
  const iconColorClass = isAccent ? 'text-btn-accent' : 'text-subtle';
  const textColorClass = isAccent ? 'text-btn-accent' : 'text-primary';

  return (
    <Link
      className={`
        flex gap-3 items-center w-full h-8 px-2 rounded-sm cursor-pointer
        ${selected ? 'bg-bg-selected' : 'bg-transparent hover:bg-bg-hover'}
      `}
      {...props}
    >
      {icon && <div className={`flex-shrink-0 ${iconColorClass}`}>{icon}</div>}
      {children && <div className={`truncate ${textColorClass}`}>{children}</div>}
    </Link>
  );
};
