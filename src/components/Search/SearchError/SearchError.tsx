import { Title } from '@/components/common/ui/Title/Title';
import { getErrorMessage, getTextsByLine } from '@/utils';

import { RefreshBtn } from '../../common/ui/RefreshBtn/RefreshBtn';
import { Txt } from '../../common/ui/Txt/Txt';
import { SearchFooter } from '../SearchFooter/SearchFooter';

interface Props {
  errorStatusCode: number;
}

export const SearchError = ({ errorStatusCode }: Props) => {
  const { title, text } = getErrorMessage('search', errorStatusCode);
  const texts = getTextsByLine(text);

  return (
    <div className="px-1 flex flex-col justify-between h-full">
      <div className="pt-4 pb-8 h-full flex flex-col items-center justify-center">
        <Title variant="error">{title}</Title>
        <div className="mb-4 text-center whitespace-pre-wrap">
          {texts.map((text, i) => (
            <Txt key={i} variant="captionSm">
              {text}
            </Txt>
          ))}
        </div>
        <RefreshBtn />
      </div>
      <SearchFooter />
    </div>
  );
};
