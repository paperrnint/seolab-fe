import type { Meta, StoryObj } from '@storybook/nextjs';
import { Timer } from './Timer';

const meta = {
  title: 'Example/Timer',
  component: Timer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### 사용 시나리오
  - 이메일 인증에 사용되는 제한 시간
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    second: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Timer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    second: 120,
  },
};
