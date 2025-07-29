import type { Meta, StoryObj } from '@storybook/nextjs';

import { UserProfile } from './UserProfile';

const meta = {
  title: 'Example/UserProfile',
  component: UserProfile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '200px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof UserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nickname: 'eunjios',
    email: 'eunjios@example.com',
  },
};

export const LongText: Story = {
  args: {
    nickname: 'long nickname long nickname long nickname',
    email: 'long-email-long-email@example.com',
  },
};
