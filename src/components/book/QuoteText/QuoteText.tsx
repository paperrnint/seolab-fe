interface Props {
  page: number | null;
  text: string;
  isFavorite?: boolean;
  showPage?: boolean;
}

export const QuoteText = ({ page, text, isFavorite = false, showPage = true }: Props) => {
  return (
    <div className="flex gap-4 py-1 px-4 lg:pl-5 lg:pr-3 leading-7 border border-transparent">
      {showPage && <div className="w-12">{page !== null && `${page}p`}</div>}
      <div className={`flex-1 text-justify ${isFavorite && 'underline-dotted'}`}>{text}</div>
    </div>
  );
};
