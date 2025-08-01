import { btnConfig, ButtonShape, ButtonSize, ButtonVariant, ButtonWidth } from './Button.constant';

interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  width?: ButtonWidth;
  outline?: boolean;
  align?: 'left' | 'center';
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  shape = 'circular',
  width = 'fit',
  outline = false,
  align = 'center',
  disabled = false,
  leftIcon,
  rightIcon,
  className = '',
  ...props
}: Props) => {
  const variantStyle = btnConfig.variants[variant][outline ? 'outline' : 'fill'];
  const sizeStyle = btnConfig.sizes[size];
  const shapeStyle = btnConfig.shapes[shape];
  const widthStyle = btnConfig.widths[width];
  const stateStyle = disabled ? btnConfig.disabled : btnConfig.enabled;
  const alignStyle = align === 'left' ? 'text-left' : 'text-center';

  const btnClass = [btnConfig.base, variantStyle, sizeStyle, shapeStyle, widthStyle, stateStyle, className].join(' ');

  return (
    <button className={btnClass} disabled={disabled} {...props}>
      {leftIcon && <div className="flex-shrink-0">{leftIcon}</div>}
      {children && <div className={`flex-1 ${alignStyle}`}>{children}</div>}
      {rightIcon && <div className="flex-shrink-0">{rightIcon}</div>}
    </button>
  );
};
