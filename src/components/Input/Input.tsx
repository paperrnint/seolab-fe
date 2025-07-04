interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const Input = ({ icon, ...props }: Props) => {
  return (
    <div className="flex gap-2 items-center px-4 py-3 border border-border w-full rounded-md">
      {icon && <div className="text-subtle">{icon}</div>}
      <input className="flex-1 w-full outline-none text-base" {...props} />
    </div>
  );
};
