import type { Meta, StoryObj } from '@storybook/nextjs';

import { InternalGradient } from './InternalGradient';

const meta = {
  title: 'Example/InternalGradient',
  component: InternalGradient,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'gradient가 적용될 자식 요소',
    },
    gradientSize: {
      control: {
        type: 'range',
        min: 10,
        max: 200,
        step: 8,
      },
      description: 'gradient의 크기 (px)',
    },
    directions: {
      control: { type: 'check' },
      options: ['top', 'bottom', 'right', 'left'],
      description: 'gradient가 적용될 방향들 (복수 선택 가능)',
    },
    bg: {
      control: { type: 'radio' },
      options: ['body', 'panel'],
      description: '배경 색상 타입',
    },
  },
} satisfies Meta<typeof InternalGradient>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div className="p-4 text-sm leading-relaxed">
        시를 좋아하고, 사랑하고, 읽고, 쓰고, 책으로 만드는 사람들은 마음속에 어떤 단어를 품고 있을까요? 아침달에서 책을
        만들고 있는 사람들, 아침달에서 시집을 출간한 시인들, 아침달을 좋아하는 독자들과 함께 써 내려간 『여름어 사전』을
        출간합니다. 총 157개의 단어로 구성된 이 책은, 여름이면 떠오르는 단어를 골라 기존의 뜻을 넘어 자기만의 이야기로
        의미를 만들어가는 책이기도 합니다.
      </div>
    ),
    gradientSize: 108,
    directions: ['bottom'],
    bg: 'body',
  },
  decorators: [
    (Story) => (
      <div className="h-fit border border-gray-300 rounded">
        <Story />
      </div>
    ),
  ],
};

export const TopGradient: Story = {
  args: {
    ...Default.args,
    directions: ['top'],
  },
  decorators: Default.decorators,
};

export const SideGradients: Story = {
  args: {
    ...Default.args,
    directions: ['left', 'right'],
    gradientSize: 64,
  },
  decorators: Default.decorators,
};

export const AllDirections: Story = {
  args: {
    ...Default.args,
    directions: ['top', 'bottom', 'left', 'right'],
    gradientSize: 48,
  },
  decorators: Default.decorators,
};

export const VerticalGradients: Story = {
  args: {
    ...Default.args,
    directions: ['top', 'bottom'],
    gradientSize: 72,
  },
  decorators: Default.decorators,
};

export const LargeGradient: Story = {
  args: {
    ...Default.args,
    gradientSize: 160,
    directions: ['bottom'],
  },
  decorators: Default.decorators,
};
