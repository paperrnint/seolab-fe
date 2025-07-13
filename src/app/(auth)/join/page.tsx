'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/Button/Button';
import { ErrorModal } from '@/components/ErrorModal/ErrorModal';
import { ErrorType } from '@/components/ErrorModal/ErrorModal.constant';
import { Join } from '@/components/Join/Join';
import { fetchData } from '@/lib/fetch/fetchData';
import { JoinFormData, joinSchema } from '@/lib/schemas/joinSchema';
import { getJoinValidations } from '@/lib/validations/joinValidation';
import { SignupResponse } from '@/types/api/auth';
import { getErrorType } from '@/utils';

export default function JoinSimple() {
  const router = useRouter();
  const [errorType, setErrorType] = useState<ErrorType | null>(null);
  const isModalOpen = !!errorType;

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { isValid, isSubmitting },
  } = useForm<JoinFormData>({
    resolver: zodResolver(joinSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  const email = watch('email');
  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const emailVals = getJoinValidations('email', email);
  const passwordVals = getJoinValidations('password', password);
  const confirmPasswordVals = [
    { label: '비밀번호와 일치', isValid: !!confirmPassword && confirmPassword === password },
  ];

  const onSubmit = async (formData: JoinFormData) => {
    try {
      const data = await fetchData<SignupResponse>('http://localhost:8080/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      console.log('가입 성공', data);
      router.push('/login');
    } catch (err) {
      const errMessage = (err as Error).message || '회원가입 중 오류가 발생했어요';
      const errType = getErrorType(errMessage);
      setErrorType(errType);
    }
  };

  const onCloseModal = () => {
    setErrorType(null);
  };

  const onClickModalButton = () => {
    if (errorType === 'joinDuplicatedEmail') {
      router.push('/login');
      return;
    }

    reset();
    onCloseModal();
  };

  return (
    <Join.Container>
      <Join.Header description="로그인에 사용할 이메일과 비밀번호를 입력하세요" />
      <Join.Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Join.Input
            label="이메일"
            placeholder="이메일"
            required
            type="email"
            validations={emailVals}
            {...register('email')}
          />
          <Join.Input
            label="비밀번호"
            placeholder="비밀번호"
            required
            type="password"
            validations={passwordVals}
            {...register('password')}
          />
          <Join.Input
            label="비밀번호 확인"
            placeholder="비밀번호 확인"
            required
            type="password"
            validations={confirmPasswordVals}
            {...register('confirmPassword')}
          />
        </div>
        <div className="flex gap-2 mt-12">
          <Button variant="form" disabled={!isValid || isSubmitting}>
            가입하기
          </Button>
        </div>
      </Join.Form>
      <ErrorModal
        errorType={errorType || 'default'}
        isOpen={isModalOpen}
        onClickButton={onClickModalButton}
        onCloseModal={onCloseModal}
      />
    </Join.Container>
  );
}
