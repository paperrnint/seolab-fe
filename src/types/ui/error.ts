import { ErrorType } from '@/constants';

export type ErrorState = {
  errorType: ErrorType;
  statusCode: number;
  customAction?: () => void;
};
