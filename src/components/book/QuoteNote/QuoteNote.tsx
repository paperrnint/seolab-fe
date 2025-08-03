import { Card } from '../../common/ui/Card/Card';

import { quoteConfig } from './QuoteNote.constant';

interface Props {
  text: string;
  page: number | null;
  bookTitle: string;
  author: string;
  line?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const QuoteNote = ({ text, page, bookTitle, author, line }: Props) => {
  const pageText = !!page ? `${bookTitle} · ${author}, ${page}p` : `${bookTitle} · ${author}`;
  return (
    <Card hasShadow={false}>
      <div className="h-full flex flex-col justify-between gap-2">
        <p className={`leading-7 text-justify dotted-lines-bg ${line ? quoteConfig[line] : ''}`}>{text}</p>
        <p className="leading-5 text-secondary text-right text-[10px]">{pageText}</p>
      </div>
    </Card>
  );
};
