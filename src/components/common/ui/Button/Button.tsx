import { aligns, btnConfig, ButtonVariant, colors, shapes, sizes, widths } from './Button.constant';

interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = ({ children, variant = 'primary', disabled = false, leftIcon, rightIcon, ...props }: Props) => {
  const { shape, width, align, color, size, type } = btnConfig[variant];
  const baseClass = 'flex gap-1 items-center text-sm font-bold flex-shrink-0 focus:outline-none';
  const validClass = disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer hover:opacity-90 transition-opacity';

  return (
    <button
      className={`
        ${baseClass}
        ${validClass}
        ${shapes[shape]} ${widths[width]}
        ${colors[color][type]} 
        ${sizes[size]}
      `}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <div className="flex-shrink-0">{leftIcon}</div>}
      {children && <div className={`flex-1 ${aligns[align]}`}>{children}</div>}
      {rightIcon && <div className="flex-shrink-0">{rightIcon}</div>}
    </button>
  );
};
