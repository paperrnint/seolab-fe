interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = ({ leftIcon, rightIcon, ...props }: Props) => {
  return (
    <div className="flex items-center flex-1 px-2 py-2 border border-border w-full rounded-md">
      {leftIcon && <div className="text-subtle pl-2">{leftIcon}</div>}
      <input className="flex-1 w-full outline-none text-base px-2 py-1" {...props} />
      {rightIcon && <div>{rightIcon}</div>}
    </div>
  );
};
