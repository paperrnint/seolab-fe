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
 * @param dateString YYYY.MM.DD 형태의 날짜
 * @returns YYYY-MM-DD
 */
export const convertToISOFormat = (dateString: string) => {
  return dayjs(dateString, 'YYYY.MM.DD').format('YYYY-MM-DD');
};
