interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = ({ children, variant = 'primary', leftIcon, rightIcon, ...props }: Props) => {
  const variantColors = {
    primary: 'bg-btn-primary text-text-btn',
    secondary: 'border border-btn-primary text-primary',
    accent: 'bg-btn-accent text-text-btn',
  };

  const variantShapes = {
    primary: 'px-4 py-2 rounded-full',
    secondary: 'px-4 py-2 rounded-full',
    accent: 'w-full gap-2 px-4 py-3 rounded-md',
  };

  const baseClasses = 'flex items-center text-sm font-bold cursor-pointer hover:opacity-90 transition-opacity';
  const shadowClass = variant === 'accent' ? 'shadow-default' : '';

  return (
    <button className={`${baseClasses} ${variantColors[variant]} ${variantShapes[variant]} ${shadowClass}`} {...props}>
      {leftIcon}
      <div className="flex-1 text-left">{children}</div>
      {rightIcon}
    </button>
  );
};
