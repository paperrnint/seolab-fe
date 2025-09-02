import type { Meta, StoryObj } from '@storybook/nextjs';

import { QuoteText } from './QuoteText';

const meta = {
  title: 'Example/QuoteText',
  component: QuoteText,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    // 사용자가 수정할 수 없도록 숨김
    bookId: {
      table: { disable: true },
    },
    quoteId: {
      table: { disable: true },
    },
    // 사용자가 컨트롤할 수 있는 props
    page: {
      control: { type: 'number' },
      description: '문장이 있는 페이지 번호 (null이면 페이지 표시 안함)',
    },
    text: {
      control: { type: 'text' },
      description: '문장 텍스트 내용',
    },
    updatedAt: {
      control: { type: 'text' },
      description: '수정된 날짜 (YYYY.MM.DD HH:mm 형식)',
    },
    isFavorite: {
      control: { type: 'boolean' },
      description: '즐겨찾기 여부',
    },
    showPage: {
      control: { type: 'boolean' },
      description: '페이지 번호 표시 여부',
    },
    isEditMode: {
      control: { type: 'boolean' },
      description: '편집 모드 여부',
    },
  },
} satisfies Meta<typeof QuoteText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bookId: 'storybook-book-id',
    quoteId: 'storybook-quote-id',
    page: 29,
    text: `한국어 문장을 이렇게 쓰는 경우는 드물다. 접미사 '-들'을 남발하는 문장은 대부분 번역 문장이다. (중략) 더군다나 관형사 '모든'으로 수식되는 명사에는 복수를 나타내는 접미사 '-들'을 붙이지 않는 것이 자연스럽다.`,
    updatedAt: '2025.01.15 14:30',
    isFavorite: false,
    showPage: true,
    isEditMode: false,
  },
};

export const FavoriteQuote: Story = {
  args: {
    ...Default.args,
    isFavorite: true,
  },
};

export const EditMode: Story = {
  args: {
    ...Default.args,
    isEditMode: true,
  },
};

export const NoPageNumber: Story = {
  args: {
    ...Default.args,
    page: null,
    showPage: false,
  },
};
