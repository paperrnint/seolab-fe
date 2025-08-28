'use client';

import { useState } from 'react';

interface Props {
  children: React.ReactNode;
  position?: 'right' | 'top';
  text?: string;
  showTooltip?: boolean;
}

export const TooltipContainer = ({ children, position = 'right', text, showTooltip = true }: Props) => {
  const [isHover, setIsHover] = useState(false);

  const baseClass = 'absolute z-50 pointer-events-none';

  const positionClass = {
    right: 'left-full top-1/2 -translate-y-1/2 ml-1.5',
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-1.5',
  };

  if (!showTooltip) {
    return <>{children}</>;
  }

  return (
    <div className="relative" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {children}
      {isHover && (
        <div className={`${baseClass} ${positionClass[position]}`}>
          <div className="bg-black text-white text-[10px] font-bold opacity-90 px-2 py-1 rounded-lg shadow-lg whitespace-nowrap">
            {text}
          </div>
        </div>
      )}
    </div>
  );
};
