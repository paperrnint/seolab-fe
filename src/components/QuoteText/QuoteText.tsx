interface Props {
  page: number;
  quote: string;
  isFavorite?: boolean;
}

export const QuoteText = ({ page, quote, isFavorite = false }: Props) => {
  return (
    <div className="flex px-4 py-2 leading-7">
      <div className="w-14.5">{page}p</div>
      <div className={`flex-1 pl-4 ${isFavorite && 'underline-dotted'}`}>{quote}</div>
    </div>
  );
};
