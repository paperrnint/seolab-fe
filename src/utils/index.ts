// @todo: 이후에 라이브러리 사용 (현재는 임시로)
export * from './date';

import { ERROR_MESSAGES, ErrorType } from '@/constants';

export const getTextsByLine = (text: string) => {
  const normalizedText = text.replace(/\\n/g, '\n');
  return normalizedText.split('\n');
};

export const getErrorMessage = (errorType: ErrorType, errorStatusCode: number) => {
  const defaultMessage = ERROR_MESSAGES.default.unknown;

  const messages = ERROR_MESSAGES[errorType];
  if (!messages || typeof messages !== 'object') return defaultMessage;

  const message = messages[errorStatusCode as keyof typeof messages];
  return message || defaultMessage;
};

export const createSearchParams = (params: Record<string, string | number | boolean | undefined>) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, value?.toString());
    }
  });

  return searchParams;
};
