import { Button } from '@/components/Button/Button';
import { Container } from '@/components/Container/Container';
import { Input } from '@/components/Input/Input';
import { Login } from '@/components/Login/Login';
import { LoginLink } from '@/components/Login/LoginLink/LoginLink';
import { MainImage } from '@/components/MainImage/MainImage';
import { SocialButton } from '@/components/SocialButton/SocialButton';
import { FaLock, FaUser } from 'react-icons/fa6';

export default function LoginPage() {
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
              <Login.Form>
                <Input leftIcon={<FaUser />} placeholder="이메일" />
                <Input leftIcon={<FaLock />} placeholder="비밀번호" />
                <Button isFull isCenter variant="big" style={{ fontSize: '16px' }}>
                  로그인
                </Button>
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
    </>
  );
}
