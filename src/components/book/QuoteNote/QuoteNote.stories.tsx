import type { Meta, StoryObj } from '@storybook/nextjs';

import { QuoteNote } from './QuoteNote';

const meta = {
  title: 'Example/QuoteNote',
  component: QuoteNote,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
    },
    page: {
      control: { type: 'number' },
    },
  },
} satisfies Meta<typeof QuoteNote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "한국어 문장을 이렇게 쓰는 경우는 드물다. 접미사 '-들'을 남발하는 문장은 대부분 번역 문장이다. (중략) 더군다나 관형사 '모든'으로 수식되는 명사에는 복수를 나타내는 접미사 '-들'을 붙이지 않는 것이 자연스럽다.",
    page: 29,
    bookTitle: '내 문장이 그렇게 이상한가요?',
    author: '김정선',
  },
};

export const Line1: Story = {
  args: {
    text: "한국어 문장을 이렇게 쓰는 경우는 드물다. 접미사 '-들'을 남발하는 문장은 대부분 번역 문장이다. (중략) 더군다나 관형사 '모든'으로 수식되는 명사에는 복수를 나타내는 접미사 '-들'을 붙이지 않는 것이 자연스럽다.",
    page: 29,
    bookTitle: '내 문장이 그렇게 이상한가요?',
    author: '김정선',
    line: 1,
  },
};

export const Line6: Story = {
  args: {
    text: "한국어 문장을 이렇게 쓰는 경우는 드물다. 접미사 '-들'을 남발하는 문장은 대부분 번역 문장이다. (중략) 더군다나 관형사 '모든'으로 수식되는 명사에는 복수를 나타내는 접미사 '-들'을 붙이지 않는 것이 자연스럽다.",
    page: 29,
    bookTitle: '내 문장이 그렇게 이상한가요?',
    author: '김정선',
    line: 6,
  },
};
