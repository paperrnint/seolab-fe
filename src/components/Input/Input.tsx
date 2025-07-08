import { forwardRef } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, Props>(({ leftIcon, rightIcon, ...props }, ref) => {
  return (
    <div className="flex items-center flex-1 px-2 py-2 border border-border w-full rounded-md">
      {leftIcon && <div className="text-subtle pl-2">{leftIcon}</div>}
      <input className="flex-1 w-full outline-none text-base px-2 py-1" ref={ref} {...props} />
      {rightIcon && <div>{rightIcon}</div>}
    </div>
  );
});

Input.displayName = 'Input';
