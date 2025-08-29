import { fetchData } from '@/lib/fetch/fetchData';
import { JoinFormData } from '@/lib/schemas/joinSchema';
import { LoginFormData } from '@/lib/schemas/loginSchema';
import {
  CurrentUserResponse,
  LoginResponse,
  RefreshResponse,
  SignupResponse,
  VerifyCodeRequest,
  VerifyCodeResponse,
  VerifyRequestResponse,
} from '@/types/api/auth';

const signup = async (formData: JoinFormData) => {
  return fetchData<SignupResponse>('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};

const login = async (formData: LoginFormData) => {
  return fetchData<LoginResponse>('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(formData),
    credentials: 'include',
  });
};

const refreshToken: () => Promise<RefreshResponse> = async () => {
  return fetchData<RefreshResponse>('/api/auth/refresh', {
    method: 'POST',
    credentials: 'include',
  });
};

const logout = async (accessToken: string) => {
  return fetchData('/api/auth/logout', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: 'include',
  });
};

const getCurrentUser = async (accessToken: string) => {
  return fetchData<CurrentUserResponse>('/api/auth/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const verifyRequest = async (email: string) => {
  return fetchData<VerifyRequestResponse>('/api/auth/verify/request', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
};

const verifyCode = async (emailCode: VerifyCodeRequest) => {
  return fetchData<VerifyCodeResponse>('/api/auth/verify', {
    method: 'POST',
    body: JSON.stringify(emailCode),
  });
};

export const authService = {
  signup,
  login,
  refreshToken,
  logout,
  getCurrentUser,
  verifyRequest,
  verifyCode,
};
