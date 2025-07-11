interface Props {
  page: number;
  quote: string;
  isFavorite?: boolean;
  showPage?: boolean;
}

export const QuoteText = ({ page, quote, isFavorite = false, showPage = true }: Props) => {
  return (
    <div className="flex gap-4 py-2 px-4 lg:pl-5 lg:pr-3 leading-7 border border-transparent">
      {showPage && <div className="w-12">{page}p</div>}
      <div className={`flex-1 ${isFavorite && 'underline-dotted'}`}>{quote}</div>
    </div>
  );
};
