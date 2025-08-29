import { ApiError } from '@/lib/fetch/ApiError';

export type ApiErrorResponse = {
  message?: string;
};

export type ApiResult<TData = void> =
  | (TData extends void ? { success: true } : { success: true; data: TData })
  | {
      success: false;
      error: ApiError;
    };

/**
 * server action -> client 로 error stringify 되지 않는 문제 fix 용
 */
export type ServerActionResult<TData = void, TErrorData = void> =
  | (TData extends void ? { success: true } : { success: true; data: TData })
  | {
      success: false;
      error: TErrorData extends void
        ? {
            message: string;
            status: number;
            name: string;
          }
        : {
            message: string;
            status: number;
            name: string;
            data: TErrorData;
          };
    };
