interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hasShadow?: boolean;
}

export const Card = ({ children, hasShadow = true, ...props }: Props) => {
  return (
    <div
      className={`border border-border ${hasShadow ? 'shadow-default' : ''} rounded-lg px-4 py-3 bg-white w-full`}
      {...props}
    >
      {children}
    </div>
  );
};
