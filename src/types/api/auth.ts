export interface LoginResponse {
  accessToken: string;
  email: string;
  username: string;
}

export interface SignupResponse {
  email: string;
  username: string;
}

export interface RefreshResponse {
  accessToken: string;
}

export interface CurrentUserResponse {
  email: string;
  username: string;
}

export interface VerifyRequestResponse {
  message: string;
  expiresInSeconds: number;
}

export interface VerifyCodeResponse {
  message: string;
}

export interface VerifyCodeRequest {
  email: string;
  code: string;
}
