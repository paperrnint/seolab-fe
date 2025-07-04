import type { Meta, StoryObj } from '@storybook/nextjs';
import { LoginLink } from './LoginLink';

const linkMap = {
  naver: 'https://www.naver.com',
  google: 'https://www.google.com',
};

const meta = {
  title: 'Login/LoginLink',
  component: LoginLink,
  parameters: {
    layout: 'padded',
    componentSubtitle: '로그인 관련 링크 (ex. 비밀번호 찾기, 가입하기...) 으로 이동하는 컴포넌트',
    docs: {
      description: {
        component: `
### Props
- \`href\`: 이동할 링크

### Usage

\`\`\`tsx
<Login.Link href="/find-email">{이메일 찾기}<Login.Link />
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    href: {
      control: 'select',
      options: Object.keys(linkMap),
      mapping: linkMap,
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof LoginLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '링크',
    href: linkMap.naver,
  },
};
