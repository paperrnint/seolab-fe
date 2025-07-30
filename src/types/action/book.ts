import { CreateBookErrorResponse, CreateBookResponse, QuoteApiItem } from '../api/book';
import { ServerActionResult } from '../api/common';

export type VoidResult = ServerActionResult<void>;

export type CreateBookResult = ServerActionResult<CreateBookResponse, CreateBookErrorResponse>;

export type CreateQuoteResult = ServerActionResult<QuoteApiItem>;
