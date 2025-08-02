import React from 'react';

import { useDropdown } from '../@context/DropdownContext';

interface Props {
  children: React.ReactNode;
  asChild?: boolean;
}

export const DropdownTrigger = ({ children, asChild = false }: Props) => {
  const { onToggle, triggerRef } = useDropdown();

  if (asChild) {
    const element = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>;

    return (
      <div ref={triggerRef}>
        {React.cloneElement(element, {
          onClick: (e: React.MouseEvent<HTMLElement>) => {
            const originalOnClick = element.props.onClick;
            originalOnClick?.(e);
            onToggle();
          },
        })}
      </div>
    );
  }

  return (
    <div ref={triggerRef}>
      <button onClick={onToggle}>{children}</button>
    </div>
  );
};
