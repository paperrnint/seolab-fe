import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { ApiError } from '@/lib/fetch/ApiError';
import { JoinFormData } from '@/lib/schemas/joinSchema';
import { authService } from '@/services/authService';
import { VerifyRequestResponse } from '@/types/api/auth';
import { ApiResult } from '@/types/api/common';

import { useError } from '../common';

import { useJoinForm } from './useJoinForm';

export const useJoinPage = () => {
  const router = useRouter();
  const { showError } = useError();
  const { form, validations } = useJoinForm();

  // join API
  const join: (formData: JoinFormData) => Promise<ApiResult> = useCallback(async (formData: JoinFormData) => {
    try {
      await authService.signup(formData);
      return { success: true };
    } catch (err) {
      return {
        success: false,
        error: err as ApiError,
      };
    }
  }, []);

  // Join Form 제출 시 수행
  const onSubmit = async (formData: JoinFormData) => {
    const result = await join(formData);

    if (result.success) {
      router.push('/login');
    } else {
      showError('signup', result.error.status, () => {
        if (result.error.status === 409) {
          router.push('/login');
        } else {
          form.reset();
        }
      });
    }
  };

  // 이메일 인증
  const verifyRequest: (email: string) => Promise<ApiResult<VerifyRequestResponse>> = useCallback(
    async (email: string) => {
      try {
        const data = await authService.verifyRequest(email);
        return { success: true, data };
      } catch (err) {
        return {
          success: false,
          error: err as ApiError,
        };
      }
    },
    []
  );

  const verifyCode: (email: string, code: string) => Promise<ApiResult> = useCallback(
    async (email: string, code: string) => {
      try {
        await authService.verifyCode({ email, code });
        return { success: true };
      } catch (err) {
        return {
          success: false,
          error: err as ApiError,
        };
      }
    },
    []
  );

  return {
    validations,
    handleSubmit: form.handleSubmit(onSubmit),
    form: form,
    verifyRequest,
    verifyCode,
  };
};
