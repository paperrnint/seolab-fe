interface Props {
  children: React.ReactNode;
  variant?: 'sm' | 'md';
  icon?: React.ReactNode;
  isSensitive?: boolean;
}

export const DropdownLabel = ({ children, variant = 'md', icon, isSensitive = false }: Props) => {
  const colorClass = isSensitive ? 'text-emp' : 'text-primary';
  const textClass = variant === 'md' ? 'text-sm' : 'text-xs';

  return (
    <div className={`flex justify-between items-center w-28 ${textClass} ${colorClass}`}>
      <div>{children}</div>
      {icon && <div className={`${isSensitive ? 'text-emp' : 'text-subtle'} opacity-60`}>{icon}</div>}
    </div>
  );
};
