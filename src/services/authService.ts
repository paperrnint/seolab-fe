import { fetchData } from '@/lib/fetch/fetchData';
import { JoinFormData } from '@/lib/schemas/joinSchema';
import { LoginFormData } from '@/lib/schemas/loginSchema';
import { LoginResponse, SignupResponse } from '@/types/api/auth';

const signup: (formData: JoinFormData) => Promise<SignupResponse> = async (formData: JoinFormData) => {
  return fetchData<SignupResponse>('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};

const login: (formData: LoginFormData) => Promise<LoginResponse> = async (formData) => {
  return fetchData<LoginResponse>('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};

export const authService = {
  signup,
  login,
};
