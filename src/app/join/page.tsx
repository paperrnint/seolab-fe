'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/Button/Button';
import { Join } from '@/components/Join/Join';
import { JoinFormData, joinSchema } from '@/lib/schemas/joinSchema';
import { getJoinValidations } from '@/lib/validations/joinValidation';

export default function JoinSimple() {
  const router = useRouter();
  const {
    register,
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

  const onSubmit = async (data: JoinFormData) => {
    try {
      console.log('join data form:', data);
      // @todo: join api
      router.push('/login');
    } catch (err) {
      console.error('join error', err);
    }
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
    </Join.Container>
  );
}
