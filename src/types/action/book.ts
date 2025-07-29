import { ApiError } from '@/lib/fetch/ApiError';

import { QuoteApiItem } from '../api/book';

export type CreateBookActionReturn =
  | {
      success: true;
      data: {
        id: string;
      };
    }
  | {
      success: false;
      error: {
        data: {
          message: string;
          id: string;
        };
        status: number;
        name: string;
      };
    };

export type CreateQuoteActionReturn =
  | {
      success: true;
      data: QuoteApiItem;
    }
  | {
      success: false;
      error: ApiError;
    };
