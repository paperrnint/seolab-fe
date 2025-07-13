// @todo: 이후에 라이브러리 사용 (현재는 임시로)

import { ErrorType } from '@/components/ErrorModal/ErrorModal.constant';

/**
 * 날짜 차이를 구하는 유틸 함수
 * @param startAt xxxx-xx-xx 형태
 * @param endAt xxxx-xx-xx 형태
 * @returns
 */
export const getDaysDiff = (startAt: string, endAt?: string) => {
  const start = new Date(startAt);
  const end = endAt ? new Date(endAt) : new Date();

  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays + 1;
};

export const convertDateText = (date: string) => {
  const [y, m, d] = date.split('-');
  return `${+m}월 ${+d}일`;
};

export const getTextsByLine = (text: string) => {
  const normalizedText = text.replace(/\\n/g, '\n');
  return normalizedText.split('\n');
};

export const getErrorType: (errorMessage: string) => ErrorType = (errorMessage: string) => {
  if (errorMessage.includes('이미 사용중인 이메일')) {
    return 'joinDuplicatedEmail';
  } else if (errorMessage.includes('올바른 이메일 형식') || errorMessage.includes('비밀번호는 최소')) {
    return 'authValidation';
  } else if (errorMessage.includes('이메일 또는 비밀번호가 일치하지 않습니다')) {
    return 'loginUnauthorized';
  }
  return 'default';
};
