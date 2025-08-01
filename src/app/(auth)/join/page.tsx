'use client';

import { Join } from '@/components/auth/Join/Join';
import { FormSubmitButton } from '@/components/common/ui/FormSubmitButton/FormSubmitButton';
import { useJoinPage } from '@/hooks/auth';

export default function JoinSimple() {
  const { validations, formState, register, handleSubmit } = useJoinPage();

  return (
    <Join.Container>
      <Join.Header description="로그인에 사용할 이메일과 비밀번호를 입력하세요" />
      <Join.Form onSubmit={handleSubmit}>
        <div>
          <Join.Input
            label="이메일"
            placeholder="이메일"
            required
            type="email"
            validations={validations.email}
            {...register('email')}
          />
          <Join.Input
            label="비밀번호"
            placeholder="비밀번호"
            required
            type="password"
            validations={validations.password}
            {...register('password')}
          />
          <Join.Input
            label="비밀번호 확인"
            placeholder="비밀번호 확인"
            required
            type="password"
            validations={validations.confirmPassword}
            {...register('confirmPassword')}
          />
        </div>
        <div className="flex gap-2 mt-12">
          <FormSubmitButton disabled={!formState.isValid || formState.isSubmitting}>가입하기</FormSubmitButton>
        </div>
      </Join.Form>
    </Join.Container>
  );
}
