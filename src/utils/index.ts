// @todo: 이후에 라이브러리 사용 (현재는 임시로)

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
