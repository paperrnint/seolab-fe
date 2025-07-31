import { MAX_QUOTE_TEXT_LENGTH } from '@/constants';
import { useTextareaHeight } from '@/hooks/useTextareaHeight';

import { useQuoteInput } from '../@context/QuoteInputContext';

interface Props {
  minLine?: number;
}

export const QuoteInputField = ({ minLine = 2 }: Props) => {
  const { page, text, setPage, setText, submit } = useQuoteInput();
  const { textareaRef } = useTextareaHeight(text, {
    minLine: minLine,
  });

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (e.nativeEvent.isComposing) {
        return;
      }

      e.preventDefault();
      submit();
    }
    // @todo : 줄바꿈 (Shift + Enter) 처리할지
  };

  const onChangePage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // 숫자만 입력 가능하도록 필터링
    if (value === '' || /^\d+$/.test(value)) {
      setPage(value);
    }
  };

  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= MAX_QUOTE_TEXT_LENGTH) {
      setText(value);
    } else {
      // @todo: text length limit 유저에게 알리기
      setText(value.slice(0, MAX_QUOTE_TEXT_LENGTH));
    }
  };

  return (
    <div className="flex w-full gap-3">
      <div className="w-fit">
        <input
          className="w-11 outline-none text-sm leading-6"
          placeholder="페이지"
          enterKeyHint="next"
          value={page}
          onChange={onChangePage}
          onKeyDown={onKeyDown}
        />
      </div>
      <div className="flex items-end gap-4 pl-3 flex-1">
        <textarea
          ref={textareaRef}
          className="outline-none resize-none text-sm leading-6 w-full pr-2"
          placeholder="기록할 문장을 작성하세요.."
          enterKeyHint="send"
          value={text}
          onChange={onChangeText}
          onKeyDown={onKeyDown}
          style={{ minHeight: `${minLine * 24}px` }}
        />
      </div>
    </div>
  );
};
