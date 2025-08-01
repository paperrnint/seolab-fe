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
