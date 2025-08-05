import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { ApiError } from '@/lib/fetch/ApiError';
import { JoinFormData } from '@/lib/schemas/joinSchema';
import { authService } from '@/services/authService';
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

  return {
    validations,
    formState: form.formState,
    register: form.register,
    handleSubmit: form.handleSubmit(onSubmit),
  };
};
