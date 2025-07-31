interface Props {
  children: React.ReactNode;
}

export const QuoteInputAction = ({ children }: Props) => {
  return (
    <div className="w-full">
      <div className="flex gap-2 justify-end">{children}</div>
    </div>
  );
};
