import type { Meta, StoryObj } from '@storybook/nextjs';

import { ModalButton } from './ModalButton';

const meta = {
  title: 'Button/ModalButton',
  component: ModalButton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: '버튼 텍스트 내용',
    },
    variant: {
      control: { type: 'select' },
      options: ['full', 'confirm', 'cancel', 'delete'],
      description: '모달 버튼의 용도별 스타일',
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
} satisfies Meta<typeof ModalButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// 각 variant별 기본 스토리
export const Full: Story = {
  args: {
    variant: 'full',
    children: '확인',
    disabled: false,
  },
};

export const Confirm: Story = {
  args: {
    variant: 'confirm',
    children: '확인',
    disabled: false,
  },
};

export const Cancel: Story = {
  args: {
    variant: 'cancel',
    children: '취소',
    disabled: false,
  },
};

export const Delete: Story = {
  args: {
    variant: 'delete',
    children: '삭제',
    disabled: false,
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    variant: 'confirm',
    children: '비활성화됨',
    disabled: true,
  },
};
