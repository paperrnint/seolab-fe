'use client';

import { useState } from 'react';

interface Props {
  children: React.ReactNode;
  text?: string;
  showTooltip?: boolean;
}

export const TooltipContainer = ({ children, text, showTooltip = true }: Props) => {
  const [isHover, setIsHover] = useState(false);

  if (!showTooltip) {
    return <>{children}</>;
  }

  return (
    <div className="relative" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {children}
      {isHover && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-1.5 z-50 pointer-events-none">
          <div className="bg-black text-white text-[10px] font-bold opacity-90 px-2 py-1 rounded-lg shadow-lg whitespace-nowrap">
            {text}
          </div>
        </div>
      )}
    </div>
  );
};
