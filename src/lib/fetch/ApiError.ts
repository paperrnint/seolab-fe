export class ApiError extends Error {
  status: number;
  response?: Response;

  constructor(message: string, status: number, response?: Response) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.response = response;
  }

  isClientError() {
    return this.status >= 400 && this.status < 500;
  }

  isServerError() {
    return this.status >= 500;
  }

  isUnauthorized() {
    return this.status === 401;
  }

  isForbidden() {
    return this.status === 403;
  }
}
