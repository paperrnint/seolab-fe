import type { Meta, StoryObj } from '@storybook/nextjs';

import { BookHeader } from './BookHeader';

const thumbnailMap = {
  basic: '/images/bookcover.jpg',
  long: '/images/bookcover-long.jpg',
  square: '/images/bookcover-square.jpg',
};

const meta = {
  title: 'Example/BookHeader',
  component: BookHeader,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    thumbnail: {
      options: Object.keys(thumbnailMap),
      mapping: thumbnailMap,
      control: {
        type: 'select',
        labels: {
          basic: 'Basic Cover',
          long: 'Long Cover',
          square: 'Square Cover',
        },
      },
    },
    publishedDate: {
      description: 'YYYY.MM.DD 형태',
      control: {
        type: 'text',
      },
    },
    startAt: {
      description: 'YYYY.MM.DD 형태',
    },
    endAt: {
      description: 'YYYY.MM.DD 형태',
      type: {
        name: 'string',
        required: false,
      },
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof BookHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'id',
    title: '여름어 사전',
    author: '아침달 편집부',
    publisher: '아침달',
    publishedDate: '2025.06.13',
    startAt: '2025.06.30',
    endAt: null,
    thumbnail: thumbnailMap.basic,
    isFavorite: false,
    isReading: true,
  },
};
