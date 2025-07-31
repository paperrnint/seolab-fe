interface Props {
  children: React.ReactNode;
  bg?: 'body' | 'card';
}

export const QuoteInputContainer = ({ children, bg = 'card' }: Props) => {
  const bgClass = bg === 'body' ? 'bg-bg-body' : 'bg-bg-card';

  return (
    <div className={`flex flex-col flex-1 gap-2 items-start border border-border rounded-lg py-2 pl-3 pr-2 ${bgClass}`}>
      {children}
    </div>
  );
};
