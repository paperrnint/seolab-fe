import type { Meta, StoryObj } from '@storybook/nextjs';
import { FaBoxArchive, FaHouse, FaStar } from 'react-icons/fa6';

import { NavItem } from './NavItem';

const iconMap = {
  none: null,
  house: <FaHouse className="text-secondary opacity-80" />,
  star: <FaStar className="text-secondary opacity-80" />,
  archive: <FaBoxArchive className="text-secondary opacity-80" />,
};

const meta = {
  title: 'Example/NavItem',
  component: NavItem,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    selected: {
      control: { type: 'boolean' },
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(iconMap),
      mapping: iconMap,
    },
    children: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selected: false,
    children: 'Default Anchor Text',
  },
};

export const Selected: Story = {
  args: {
    selected: true,
    children: 'Selected Anchor Text',
  },
};

export const WithIcon: Story = {
  args: {
    selected: false,
    icon: 'house',
    children: 'With Icon Anchor Text',
  },
};
