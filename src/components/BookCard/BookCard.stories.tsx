import type { Meta, StoryObj } from '@storybook/nextjs';
import { BookCard } from './BookCard';

const meta = {
  title: 'Example/BookCard',
  component: BookCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof BookCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '책 제목',
    author: '작가명',
    thumbnail: '/images/bookcover.jpg',
    startAt: '25년 6월 30일',
    endAt: '25년 8월 1일',
    count: 10,
  },
};

export const Reading: Story = {
  args: {
    title: '책 제목',
    author: '작가명',
    thumbnail: '/images/bookcover.jpg',
    startAt: '25년 6월 30일',
    count: 10,
  },
};

export const LongTextNarrowWidth: Story = {
  args: {
    title: '책 제목과 작가명이 길고 저장한 문장도 많은 경우 테스트',
    author: '책 제목이 길고 작가명이 긴 경우, 그리고 저장한 문장도 많은 경우 테스트',
    thumbnail: '/images/bookcover.jpg',
    startAt: '25년 6월 30일',
    endAt: '25년 8월 1일',
    count: 1000,
    width: 0,
  },
};
