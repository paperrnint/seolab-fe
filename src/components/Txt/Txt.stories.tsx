import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Txt } from './Txt';

const meta = {
  title: 'Example/Txt',
  component: Txt,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof Txt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: 'base',
    children: '기본 스타일 텍스트',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: '캡션 스타일 텍스트',
  },
};

export const Muted: Story = {
  args: {
    variant: 'muted',
    children: '연한 스타일 텍스트',
  },
};
