'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { FaLock, FaUser } from 'react-icons/fa6';

import { Login } from '@/components/auth/Login/Login';
import { LoginLink } from '@/components/auth/Login/LoginLink/LoginLink';
import { MainImage } from '@/components/auth/Login/MainImage/MainImage';
import { Container } from '@/components/common/ui/Container/Container';
import { FormSubmitButton } from '@/components/common/ui/FormSubmitButton/FormSubmitButton';
import { Input } from '@/components/common/ui/Input/Input';
import { SocialButton } from '@/components/common/ui/SocialButton/SocialButton';
import { TooltipContainer } from '@/components/modal/TooltipContainer/TooltipContainer';
import { useAuth, useError } from '@/hooks';
import { LoginFormData, loginSchema } from '@/lib/schemas/loginSchema';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const { showError } = useError();
  const {
    register,
    handleSubmit,
    reset: formReset,
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
    const result = await login(formData);
    if (result.success) {
      router.push('/');
    } else {
      showError('login', result.error.status, () => {
        formReset();
      });
    }
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
                  <FormSubmitButton disabled={!isValid || isSubmitting}>로그인</FormSubmitButton>
                </div>
              </Login.Form>
              <Login.Links>
                <LoginLink href="/">이메일 찾기</LoginLink>
                <LoginLink href="/">비밀번호 찾기</LoginLink>
                <LoginLink href="/join">회원가입</LoginLink>
              </Login.Links>
              <Login.Social label="SNS 계정으로 시작하기">
                <TooltipContainer position="top" text="개발중..">
                  <SocialButton provider="naver" disabled />
                </TooltipContainer>
                <TooltipContainer position="top" text="개발중..">
                  <SocialButton provider="kakao" disabled />
                </TooltipContainer>
              </Login.Social>
            </Login.Container>
          </div>
        </Container>
      </div>
    </>
  );
}
