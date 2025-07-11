interface Props {
  children: React.ReactNode;
  icon?: React.ReactNode;
  isSensitive?: boolean;
}

export const BookMoreItem = ({ children, icon, isSensitive = false }: Props) => {
  return (
    <div className={`flex justify-between items-center w-24 ${isSensitive ? 'text-emp' : 'text-primary'}`}>
      <div>{children}</div>
      {icon && <div className={`${isSensitive ? 'text-emp' : 'text-subtle'} opacity-60`}>{icon}</div>}
    </div>
  );
};
