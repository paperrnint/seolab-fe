import { Card } from '../../common/ui/Card/Card';

import { quoteConfig } from './QuoteNote.constant';

interface Props {
  text: string;
  page: number | null;
  line?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const QuoteNote = ({ text, page, line }: Props) => {
  return (
    <Card hasShadow={true}>
      <div className="h-full flex flex-col justify-between gap-1">
        <p className={`leading-7 text-justify underline-dotted ${line ? quoteConfig[line] : ''}`}>{text}</p>
        {page && <p className="leading-6 text-secondary text-right text-xs">{page}p</p>}
      </div>
    </Card>
  );
};
