'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { FaLock, FaUser } from 'react-icons/fa6';

import { Button } from '@/components/Button/Button';
import { Container } from '@/components/Container/Container';
import { ErrorModal } from '@/components/ErrorModal/ErrorModal';
import { Input } from '@/components/Input/Input';
import { Login } from '@/components/Login/Login';
import { LoginLink } from '@/components/Login/LoginLink/LoginLink';
import { MainImage } from '@/components/MainImage/MainImage';
import { SocialButton } from '@/components/SocialButton/SocialButton';
import { useAuth, useErrorModal } from '@/hooks/auth';
import { LoginFormData, loginSchema } from '@/lib/schemas/loginSchema';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const { errorStatusCode, isOpen, showError, resetError } = useErrorModal();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (formData: LoginFormData) => {
    try {
      const result = await login(formData);
      if (result.success) {
        router.push('/');
      } else {
        showError(result.error.status);
      }
    } catch (err) {
      console.error('login error', err);
    }
  };

  const onClickModalButton = () => {
    reset();
    resetError();
  };

  return (
    <>
      <div className="min-h-dvh flex items-center justify-center">
        <Container size="lg">
          <div className="flex flex-col md:flex-row gap-0 md:gap-20 items-center justify-center pt-10">
            {/* 모바일에서 hide */}
            <MainImage />
            {/* 모바일에서 그대로 보임 */}
            <Login.Container>
              <Login.Header label="오늘 읽은 책, 어디서나 꺼내볼 수 있게" />
              <Login.Form onSubmit={handleSubmit(onSubmit)}>
                <Input type="email" placeholder="이메일" leftIcon={<FaUser />} {...register('email')} />
                <Input type="password" placeholder="비밀번호" leftIcon={<FaLock />} {...register('password')} />
                <div>
                  <Button type="submit" variant="form" disabled={!isValid || isSubmitting}>
                    로그인
                  </Button>
                </div>
              </Login.Form>
              <Login.Links>
                <LoginLink href="/">이메일 찾기</LoginLink>
                <LoginLink href="/">비밀번호 찾기</LoginLink>
                <LoginLink href="/join">회원가입</LoginLink>
              </Login.Links>
              <Login.Social label="SNS 계정으로 시작하기">
                <SocialButton provider="naver" />
                <SocialButton provider="kakao" />
              </Login.Social>
            </Login.Container>
          </div>
        </Container>
      </div>
      {errorStatusCode && (
        <ErrorModal
          errorType="login"
          errorStatusCode={errorStatusCode}
          isOpen={isOpen}
          onClickButton={onClickModalButton}
          onCloseModal={resetError}
        />
      )}
    </>
  );
}
