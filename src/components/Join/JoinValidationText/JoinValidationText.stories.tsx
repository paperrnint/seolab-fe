import type { Meta, StoryObj } from '@storybook/nextjs';

import { JoinValidationText } from './JoinValidationText';

const meta = {
  title: 'Example/JoinValidationText',
  component: JoinValidationText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### 사용 시나리오
  - 회원가입 인풋에서 유효성 검사를 나타내는 텍스트
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof JoinValidationText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Invalid: Story = {
  args: {
    label: '최소 8자-20자',
    isValid: false,
  },
};

export const Valid: Story = {
  args: {
    label: '최소 8자-20자',
    isValid: true,
  },
};
