import type { Meta, StoryObj } from '@storybook/nextjs';
import { LoginHeader } from './LoginHeader';

const meta = {
  title: 'Login/LoginHeader',
  component: LoginHeader,
  parameters: {
    layout: 'centered',
    componentSubtitle: '로그인 헤더 컴포넌트',
    docs: {
      description: {
        component: `
### Props
- \`label\` : 로고 아래 텍스트
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
  },
} satisfies Meta<typeof LoginHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: '로그인하고 기록 시작하기',
  },
};
