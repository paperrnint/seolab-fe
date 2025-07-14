export type ApiResult =
  | {
      success: true;
    }
  | {
      success: false;
      error: string;
    };
