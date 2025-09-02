import type { Meta, StoryObj } from '@storybook/nextjs';

import { BookItem } from './BookItem';

const thumbnailMap = {
  basic: '/images/bookcover.jpg',
  long: '/images/bookcover-long.jpg',
  square: '/images/bookcover-square.jpg',
};

const tagMap = {
  tag1: '태그1',
  tag2: '태그2',
  tag3: '태그3',
};

type BookItemArgs = {
  book: {
    isbn: string;
    translator: string;
    title: string;
    thumbnail: string;
    author: string;
    publisher: string;
    publishedDate: string;
    description: string;
  };
  tags?: string[];
};

const meta: Meta<BookItemArgs> = {
  title: 'Example/BookItem',
  component: BookItem,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    book: {
      control: { type: 'object' },
    },
    tags: {
      options: Object.keys(tagMap),
      mapping: tagMap,
      control: {
        type: 'check',
        labels: {
          tag1: '태그1',
          tag2: '태그2',
          tag3: '태그3',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicCover: Story = {
  args: {
    book: {
      isbn: '0123456789',
      translator: '',
      title: '여름어 사전',
      thumbnail: thumbnailMap.basic,
      author: '아침달 편집부',
      publisher: '아침달',
      publishedDate: '2025.06.30',
      description:
        '시를 좋아하고, 사랑하고, 읽고, 쓰고, 책으로 만드는 사람들은 마음속에 어떤 단어를 품고 있을까요? 아침달에서 책을 만들고 있는 사람들, 아침달에서 시집을 출간한 시인들, 아침달을 좋아하는 독자들과 함께 써 내려간 『여름어 사전』을 출간합니다. 총 157개의 단어로 구성된 이 책은, 여름이면 떠오르는 단어를 골라 기존의 뜻을 넘어 자기만의 이야기로 의미를 만들어가는 책이기도 합니다. 우리 피부 안에 흐르는, 눈동자에 머물러 있던 여름 풍경을 불러 모아 새로운 여름을 정의 내립니다. ',
    },
  },
};

export const HasTag: Story = {
  args: {
    book: {
      isbn: '0123456789',
      translator: '',
      title: '여름어 사전',
      thumbnail: thumbnailMap.basic,
      author: '아침달 편집부',
      publisher: '아침달',
      publishedDate: '2025.06.30',
      description:
        '시를 좋아하고, 사랑하고, 읽고, 쓰고, 책으로 만드는 사람들은 마음속에 어떤 단어를 품고 있을까요? 아침달에서 책을 만들고 있는 사람들, 아침달에서 시집을 출간한 시인들, 아침달을 좋아하는 독자들과 함께 써 내려간 『여름어 사전』을 출간합니다. 총 157개의 단어로 구성된 이 책은, 여름이면 떠오르는 단어를 골라 기존의 뜻을 넘어 자기만의 이야기로 의미를 만들어가는 책이기도 합니다. 우리 피부 안에 흐르는, 눈동자에 머물러 있던 여름 풍경을 불러 모아 새로운 여름을 정의 내립니다. ',
    },
    tags: [tagMap.tag1, tagMap.tag2, tagMap.tag3],
  },
};
