import type { Meta, StoryObj } from '@storybook/nextjs';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

import { Button } from './Button';

const iconMap = {
  none: null,
  left: <FaArrowLeft />,
  right: <FaArrowRight />,
};

const meta = {
  title: 'Button/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: '버튼 텍스트 내용',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'subtle', 'emp', 'transparent'],
      description: '버튼의 색상 스타일',
    },
    size: {
      control: { type: 'select' },
      options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl'],
      description: '버튼 크기',
    },
    shape: {
      control: { type: 'radio' },
      options: ['square', 'circular', 'rounded'],
      description: '버튼 모서리 스타일',
    },
    width: {
      control: { type: 'radio' },
      options: ['fit', 'full'],
      description: '버튼 너비',
    },
    outline: {
      control: { type: 'boolean' },
      description: '아웃라인 스타일 여부',
    },
    align: {
      control: { type: 'radio' },
      options: ['left', 'center'],
      description: '텍스트 정렬',
    },
    disabled: {
      control: { type: 'boolean' },
      description: '버튼 비활성화 여부',
    },
    leftIcon: {
      control: { type: 'select' },
      options: Object.keys(iconMap),
      mapping: iconMap,
      description: '왼쪽 아이콘',
    },
    rightIcon: {
      control: { type: 'select' },
      options: Object.keys(iconMap),
      mapping: iconMap,
      description: '오른쪽 아이콘',
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    size: 'md',
    shape: 'circular',
    width: 'fit',
    outline: false,
    align: 'center',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Accent: Story = {
  args: {
    ...Primary.args,
    variant: 'accent',
    children: 'Accent Button',
  },
};

export const Subtle: Story = {
  args: {
    ...Primary.args,
    variant: 'subtle',
    children: 'Subtle Button',
  },
};

export const Emp: Story = {
  args: {
    ...Primary.args,
    variant: 'emp',
    children: 'Emp Button',
  },
};

export const Transparent: Story = {
  args: {
    ...Primary.args,
    variant: 'transparent',
    children: 'Transparent Button',
  },
};

export const PrimaryOutline: Story = {
  args: {
    ...Primary.args,
    outline: true,
    children: 'Primary Outline',
  },
};

export const SecondaryOutline: Story = {
  args: {
    ...Primary.args,
    variant: 'secondary',
    outline: true,
    children: 'Secondary Outline',
  },
};

export const Shapes: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Button shape="square" variant="primary">
        Square
      </Button>
      <Button shape="circular" variant="primary">
        Circular
      </Button>
      <Button shape="rounded" variant="primary">
        Rounded
      </Button>
    </div>
  ),
};

export const Widths: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <Button width="fit" variant="primary">
        Fit Width
      </Button>
      <Button width="full" variant="primary">
        Full Width
      </Button>
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    ...Primary.args,
    children: 'Button With Icons',
    leftIcon: 'right',
    rightIcon: 'right',
  },
};

export const IconOnly: Story = {
  args: {
    ...Primary.args,
    children: '',
    leftIcon: 'right',
    size: 'md',
    shape: 'circular',
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    children: 'Disabled Button',
    disabled: true,
  },
};
