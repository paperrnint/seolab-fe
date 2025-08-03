import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

/**
 *
 * @param dateString YYYY-MM-DD 형태의 날짜
 * @returns YYYY.MM.DD
 */
export const formatDate = (dateString: string) => {
  return dayjs(dateString).format('YYYY.MM.DD');
};

/**
 *
 * @param dateString YYYY-MM-DD 형태의 날짜
 * @returns YY년 M월 D일
 */
export const formatDateKorean = (dateString: string) => {
  return dayjs(dateString).format('YY년 M월 D일');
};

/**
 *
 * @param dateString YYYY.MM.DD 형태의 날짜
 * @returns YYYY-MM-DD
 */
export const convertToISOFormat = (dateString: string) => {
  return dayjs(dateString, 'YYYY.MM.DD').format('YYYY-MM-DD');
};

/**
 *
 * @param dateTimeString ISO 8601 형태의 날짜시간 (예: 2025-07-28T16:46:49.846552)
 * @returns 2025년 7월 28일 오후 4:46
 */
export const formatDateTimeKorean = (dateTimeString: string) => {
  return dayjs(dateTimeString).format('YYYY년 M월 D일 A h:mm');
};

/**
 * 날짜 차이를 계산하는 함수
 * @param startDate 시작 날짜 (ISO 8601 형태)
 * @param endDate 종료 날짜 (ISO 8601 형태, null이면 현재 날짜)
 * @returns endDate가 null이면 현재까지의 일, null이 아니면 endDate - startDate
 */
export const calculateDaysDiff = (startDate: string, endDate?: string | null): number => {
  const start = dayjs(startDate);

  if (!endDate) {
    const today = dayjs();
    return today.diff(start, 'day') + 1; // 시작일도 포함
  } else {
    const end = dayjs(endDate);
    return end.diff(start, 'day');
  }
};
