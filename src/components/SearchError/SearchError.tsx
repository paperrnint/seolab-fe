import { FaCircleExclamation } from 'react-icons/fa6';

import { getErrorMessage, getTextsByLine } from '@/utils';

import { RefreshBtn } from '../RefreshBtn/RefreshBtn';
import { SearchFooter } from '../SearchFooter/SearchFooter';
import { Txt } from '../Txt/Txt';

interface Props {
  errorStatusCode: number;
}

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full my-2 text-center">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-center items-center text-2xl text-subtle">
          <FaCircleExclamation />
        </div>
        <Txt variant="bold">{children}</Txt>
      </div>
    </div>
  );
};

export const SearchError = ({ errorStatusCode }: Props) => {
  const { title, text } = getErrorMessage('search', errorStatusCode);
  const texts = getTextsByLine(text);

  return (
    <div className="px-1 flex flex-col justify-between h-full">
      <div className="pt-4 pb-8 h-full flex flex-col items-center justify-center">
        <Title>{title}</Title>
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
