import { useCallback, useEffect, useRef } from 'react';

interface Options {
  minLine?: number;
  maxLine?: number;
  lineHeight?: number;
}

export const useTextareaHeight = (value: string, options: Options = {}) => {
  const {
    minLine = 1,
    maxLine = 8,
    lineHeight = 24, // text-sm leading-6 = 24px
  } = options;

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const minHeight = minLine * lineHeight;
  const maxHeight = maxLine * lineHeight;

  const adjustHeight = useCallback(() => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = 'auto';
    const newHeight = Math.max(minHeight, Math.min(textarea.scrollHeight, maxHeight));
    textarea.style.height = `${newHeight}px`;
    textarea.style.overflowY = textarea.scrollHeight > maxHeight ? 'auto' : 'hidden';
  }, [maxHeight, minHeight]);

  useEffect(() => {
    adjustHeight();
  }, [adjustHeight, value]);

  return { textareaRef };
};
