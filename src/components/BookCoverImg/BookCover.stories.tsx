import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { BookCover } from './BookCover';

const meta = {
  title: 'Example/BookCover',
  component: BookCover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof BookCover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'sm',
    src: '/images/bookcover.jpg',
  },
};

export const MediumRoundedBorder: Story = {
  args: {
    size: 'md',
    src: '/images/bookcover.jpg',
    hasBorder: true,
    isRounded: true,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    src: '/images/bookcover.jpg',
  },
};
