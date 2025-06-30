interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = ({ children, ...props }: Props) => {
  return (
    <div className="border border-border shadow-default rounded-lg px-4 py-3 bg-white" {...props}>
      {children}
    </div>
  );
};
