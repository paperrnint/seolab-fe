import { variantColors, variantShapes } from './Button.constant';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'dropdown' | 'big';
  isFull?: boolean;
  isCenter?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = ({
  children,
  variant = 'primary',
  isFull = false,
  isCenter = false,
  leftIcon,
  rightIcon,
  ...props
}: Props) => {
  const baseClasses = 'flex gap-1 items-center text-sm font-bold cursor-pointer hover:opacity-90 transition-opacity';
  const shadowClass = variant === 'accent' ? 'shadow-default' : '';
  const fullClass = isFull ? 'w-full' : '';
  const centerClass = isCenter ? 'text-center' : 'text-left';

  return (
    <button
      className={`${baseClasses} ${variantColors[variant]} ${variantShapes[variant]} ${shadowClass} ${fullClass}`}
      {...props}
    >
      {leftIcon}
      <div className={`flex-1 ${centerClass}`}>{children}</div>
      {rightIcon}
    </button>
  );
};
