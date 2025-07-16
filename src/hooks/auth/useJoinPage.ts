import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import { ApiError } from '@/lib/fetch/ApiError';
import { JoinFormData } from '@/lib/schemas/joinSchema';
import { authService } from '@/services/authService';
import { ApiResult } from '@/types/api/result';

import { useErrorModal } from './useErrorModal';
import { useJoinForm } from './useJoinForm';

export const useJoinPage = () => {
  const router = useRouter();
  const { errorStatusCode, isOpen, showError, resetError } = useErrorModal();
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
      // @todo: 회원가입 성공 페이지/모달 만들기?
      router.push('/login');
    } else {
      showError(result.error.status);
    }
  };

  // Error Modal 내의 버튼 클릭시 수행
  const onClickModalButton = () => {
    if (errorStatusCode === 409) {
      router.push('/login');
      return;
    }

    form.reset();
    resetError();
  };

  return {
    errorStatusCode,
    isOpen,
    validations,
    formState: form.formState,
    register: form.register,
    handleSubmit: form.handleSubmit(onSubmit),
    resetError,
    onClickModalButton,
  };
};
