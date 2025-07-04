import type { Meta, StoryObj } from '@storybook/nextjs';
import { SocialButton } from './SocialButton';

const meta = {
  title: 'Example/SocialButton',
  component: SocialButton,
  parameters: {
    layout: 'centered',
    componentSubtitle: '소셜 로그인을 위한 버튼 컴포넌트',
    docs: {
      description: {
        component: `
### 사용 시나리오
  - 로그인 시 소셜 로그인 버튼 
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    provider: {
      control: 'select',
    },
  },
} satisfies Meta<typeof SocialButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    provider: 'naver',
  },
};
