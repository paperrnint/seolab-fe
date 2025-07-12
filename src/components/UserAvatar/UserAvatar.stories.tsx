import type { Meta, StoryObj } from '@storybook/nextjs';

import { UserAvatar } from './UserAvatar';

const meta = {
  title: 'Example/UserAvatar',
  component: UserAvatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof UserAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithText: Story = {
  args: {
    text: 'eunjios',
  },
};
