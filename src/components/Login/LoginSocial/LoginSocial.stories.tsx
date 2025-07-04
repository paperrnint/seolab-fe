import { SocialButton } from '@/components/SocialButton/SocialButton';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { LoginSocial } from './LoginSocial';

const meta = {
  title: 'Login/LoginSocial',
  component: LoginSocial,
  parameters: {
    layout: 'padded',
    componentSubtitle: '소셜로그인 영역의 컨테이너',
    docs: {
      description: {
        component: `
### Props
- \`label\` : 구분선 텍스트

### Usage
\`\`\`tsx
<Login.Social label="소셜 로그인">
  <SocialButton provider="naver" />
</Login.Social>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof LoginSocial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <SocialButton provider="naver" />
        <SocialButton provider="kakao" />
      </>
    ),
  },
};
