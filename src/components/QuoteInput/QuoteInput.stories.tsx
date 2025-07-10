import type { Meta, StoryObj } from '@storybook/nextjs';
import { FaBoxArchive, FaHouse, FaStar } from 'react-icons/fa6';

import { QuoteInput } from './QuoteInput';

const iconMap = {
  none: null,
  house: <FaHouse className="text-secondary opacity-80" />,
  star: <FaStar className="text-secondary opacity-80" />,
  archive: <FaBoxArchive className="text-secondary opacity-80" />,
};

const meta = {
  title: 'Example/QuoteInput',
  component: QuoteInput,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof QuoteInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
