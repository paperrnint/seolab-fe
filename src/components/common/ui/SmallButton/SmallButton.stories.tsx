import type { Meta, StoryObj } from '@storybook/nextjs';

import { SmallButton } from './SmallButton';

const meta = {
  title: 'Button/SmallButton',
  component: SmallButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: '버튼 텍스트 내용',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'subtle'],
      description: '버튼의 색상 스타일',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '버튼 비활성화 여부',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof SmallButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리들
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
    disabled: false,
  },
};

export const Subtle: Story = {
  args: {
    variant: 'subtle',
    children: 'Subtle',
    disabled: false,
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled',
    disabled: true,
  },
};
