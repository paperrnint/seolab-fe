import { variantColors, variantShapes } from './Button.constant';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = ({ children, variant = 'primary', leftIcon, rightIcon, ...props }: Props) => {
  const baseClasses = 'flex gap-2 items-center text-sm font-bold cursor-pointer hover:opacity-90 transition-opacity';
  const shadowClass = variant === 'accent' ? 'shadow-default' : '';

  return (
    <button className={`${baseClasses} ${variantColors[variant]} ${variantShapes[variant]} ${shadowClass}`} {...props}>
      {leftIcon}
      <div className="flex-1 text-left">{children}</div>
      {rightIcon}
    </button>
  );
};
