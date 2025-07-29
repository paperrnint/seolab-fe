import type { Meta, StoryObj } from '@storybook/nextjs';

import { QuoteInput } from './QuoteInput';

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
