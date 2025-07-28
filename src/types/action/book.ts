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
