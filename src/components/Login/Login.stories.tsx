import type { Meta, StoryObj } from '@storybook/nextjs';
import { FaLock, FaUser } from 'react-icons/fa6';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { SocialButton } from '../SocialButton/SocialButton';
import { Login } from './Login';

const meta = {
  title: 'Login/Login',
  parameters: {
    layout: 'padded',
    componentSubtitle: '사용자 로그인을 위한 컴포넌트',
    docs: {
      description: {
        component: `
로그인 페이지에서 사용되는 compound component입니다.

### Component
- \`Login.Container\`: 전체 레이아웃 컨테이너
- \`Login.Header\`: 페이지 제목 및 설명
- \`Login.Form\`: 로그인 폼 영역
- \`Login.Links\`: 유틸리티 링크들 (이메일 찾기, 비밀번호 찾기 등)
- \`Login.Social\`: 소셜 로그인 버튼 영역

### Usage
\`\`\`tsx
<Login.Container>
  <Login.Header label="로고 아래 위치하는 텍스트" />
  <Login.Form>
    <Input placeholder="이메일" />
    <Input placeholder="비밀번호" />
    <Button>로그인</Button>
  </Login.Form>
  <Login.Links>
    <Login.Link href="/find-email">이메일 찾기</Login.Link>
  </Login.Links>
  <Login.Social label="간편 로그인">
    <SocialButton provider="naver" />
  </Login.Social>
</Login.Container>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
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
        <Login.Link href="/">이메일 찾기</Login.Link>
        <Login.Link href="/">비밀번호 찾기</Login.Link>
        <Login.Link href="/">회원가입</Login.Link>
      </Login.Links>
      <Login.Social label="SNS 계정으로 시작하기">
        <SocialButton provider="naver" />
        <SocialButton provider="kakao" />
      </Login.Social>
    </Login.Container>
  ),
};
