import { ApiError } from '@/lib/fetch/ApiError';

export type ApiResult =
  | {
      success: true;
    }
  | {
      success: false;
      error: ApiError;
    };
