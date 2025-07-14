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
