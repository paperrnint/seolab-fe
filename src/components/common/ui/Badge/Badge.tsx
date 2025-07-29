interface Props {
  children: React.ReactNode;
}

export const Badge = ({ children }: Props) => {
  return (
    <div className="rounded-full bg-badge-bg border-1 border-badge-bg text-badge-text text-[10px] px-2 py-1 w-fit whitespace-nowrap">
      {children}
    </div>
  );
};
