import type { Meta, StoryObj } from '@storybook/nextjs';

import { BackLine } from './BackLine';

const meta = {
  title: 'Example/BackLine',
  component: BackLine,
  parameters: {
    layout: 'padded',
    componentSubtitle: '텍스트 양 옆에 가로선을 그어주는 컴포넌트',
    docs: {
      description: {
        component: `
### 사용 시나리오
  - 로그인/회원가입 폼에서 구분선 역할
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof BackLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '또는',
  },
};
