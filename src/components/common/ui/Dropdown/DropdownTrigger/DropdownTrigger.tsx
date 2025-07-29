import React from 'react';

import { useDropdown } from '../@context/DropdownContext';

interface Props {
  children: React.ReactNode;
  asChild?: boolean;
}

export const DropdownTrigger = ({ children, asChild = false }: Props) => {
  const { onToggle } = useDropdown();

  if (asChild) {
    const element = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>;

    return React.cloneElement(element, {
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        const originalOnClick = element.props.onClick;
        originalOnClick?.(e);
        onToggle();
      },
    });
  }

  return <button onClick={onToggle}>{children}</button>;
};
