import type { Meta, StoryObj } from '@storybook/nextjs';

import { BookCard } from '../../book/BookCard/BookCard';

import { GridSection } from './GridSection';

const DUMMY_BOOK = {
  author: '작가명',
  count: 10,
  endAt: '25년 8월 1일',
  startAt: '25년 6월 30일',
  thumbnail: '/images/bookcover-long.jpg',
  title: '책 제목',
} as const;
const DUMMY_BOOKS = Array.from({ length: 4 }, () => DUMMY_BOOK);

const meta = {
  title: 'Layout/GridSection',
  component: GridSection,
  parameters: {
    layout: 'padded',
    componentSubtitle: '네비게이션 바를 포함한 레이아웃',
    docs: {
      description: {
        component: `
- 미디어쿼리를 사용하여 width 별로 다른 홈 그리드 레이아웃
- 홈 화면에서 책 카드를 보여주는 그리드 레이아웃 구성
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: '그리드 내부에 표시될 컴포넌트들',
    },
  },
} satisfies Meta<typeof GridSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '책 (4)',
    children: DUMMY_BOOKS.map((book, i) => (
      <BookCard
        key={i}
        author={book.author}
        count={book.count}
        endAt={book.endAt}
        startAt={book.startAt}
        thumbnail={book.thumbnail}
        title={book.title}
      />
    )),
  },
};
