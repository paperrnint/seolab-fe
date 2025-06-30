import { Card } from '../Card/Card';
import { quoteConfig } from './QuoteNote.constant';

interface Props {
  quote: string;
  page: number;
  width?: number; // px
  line?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const QuoteNote = ({ quote, page, line, width = 420 }: Props) => {
  return (
    <Card style={{ width: `${width}px`, minWidth: `${width}px` }}>
      <div className="flex flex-col justify-between gap-1">
        <p className={`leading-7 underline-dotted ${line ? quoteConfig[line] : ''}`}>{quote}</p>
        <p className="leading-6 text-secondary text-right text-xs">{page}p</p>
      </div>
    </Card>
  );
};
