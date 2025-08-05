import { useCallback, useEffect, useRef } from 'react';

export const useAutoScroll = (quotesLength: number) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const prevQuotesLength = useRef(quotesLength);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, []);

  useEffect(() => {
    // prevent scroll on initial mount
    if (quotesLength > prevQuotesLength.current) {
      scrollToBottom();
    }

    prevQuotesLength.current = quotesLength;
  }, [quotesLength, scrollToBottom]);

  return { bottomRef };
};
