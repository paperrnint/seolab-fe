import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import { Button } from './Button';

const iconMap = {
  none: null,
  left: <FaArrowLeft />,
  right: <FaArrowRight />,
};

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent'],
    },
    children: {
      control: { type: 'text' },
    },
    leftIcon: {
      control: { type: 'select' },
      options: Object.keys(iconMap),
      mapping: iconMap,
    },
    rightIcon: {
      control: { type: 'select' },
      options: Object.keys(iconMap),
      mapping: iconMap,
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'Accent Button',
  },
};

export const WithIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Button With Icon',
    leftIcon: 'right',
    rightIcon: 'right',
  },
};
