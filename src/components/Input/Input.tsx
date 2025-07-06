interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = ({ leftIcon, rightIcon, ...props }: Props) => {
  return (
    <div className="flex gap-2 items-center flex-1 px-4 py-3 border border-border w-full rounded-md">
      {leftIcon && <div className="text-subtle">{leftIcon}</div>}
      <input className="flex-1 w-full outline-none text-base" {...props} />
      {rightIcon && <div>{rightIcon}</div>}
    </div>
  );
};
