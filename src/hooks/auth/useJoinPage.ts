import { useRouter } from 'next/navigation';

import { JoinFormData } from '@/lib/schemas/joinSchema';
import { authService } from '@/services/authService';
import { getErrorType } from '@/utils';

import { useErrorModal } from './useErrorModal';
import { useJoinForm } from './useJoinForm';

export const useJoinPage = () => {
  const router = useRouter();
  const { errorType, isOpen, showError, resetError } = useErrorModal();
  const { form, validations } = useJoinForm();

  // Join Form 제출 시 수행
  const onSubmit = async (formData: JoinFormData) => {
    try {
      const data = await authService.signup(formData);
      console.log('가입 성공', data);
      router.push('/login');
    } catch (err) {
      const errMessage = (err as Error).message || '회원가입 중 오류가 발생했어요';
      const errType = getErrorType(errMessage);
      showError(errType);
    }
  };

  // Error Modal 내의 버튼 클릭시 수행
  const onClickModalButton = () => {
    if (errorType === 'joinDuplicatedEmail') {
      router.push('/login');
      return;
    }

    form.reset();
    resetError();
  };

  return {
    errorType,
    isOpen,
    validations,
    formState: form.formState,
    register: form.register,
    handleSubmit: form.handleSubmit(onSubmit),
    resetError,
    onClickModalButton,
  };
};
