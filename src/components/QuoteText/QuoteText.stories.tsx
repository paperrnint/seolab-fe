import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FaBoxArchive, FaHouse, FaStar } from 'react-icons/fa6';
import { QuoteText } from './QuoteText';

const iconMap = {
  none: null,
  house: <FaHouse className="text-secondary opacity-80" />,
  star: <FaStar className="text-secondary opacity-80" />,
  archive: <FaBoxArchive className="text-secondary opacity-80" />,
};

const meta = {
  title: 'Example/QuoteText',
  component: QuoteText,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof QuoteText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    page: 29,
    quote: `한국어 문장을 이렇게 쓰는 경우는 드물다. 접미사 '-들'을 남발하는 문장은 대부분 번역 문장이다. (중략) 더군다나 관형사 '모든'으로 수식되는 명사에는 복수를 나타내는 접미사 '-들'을 붙이지 않는 것이 자연스럽다.`,
  },
};

export const FavoriteQuote: Story = {
  args: {
    page: 29,
    quote: `한국어 문장을 이렇게 쓰는 경우는 드물다. 접미사 '-들'을 남발하는 문장은 대부분 번역 문장이다. (중략) 더군다나 관형사 '모든'으로 수식되는 명사에는 복수를 나타내는 접미사 '-들'을 붙이지 않는 것이 자연스럽다.`,
    isFavorite: true,
  },
};
