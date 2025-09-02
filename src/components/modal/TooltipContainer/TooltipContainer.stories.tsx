import type { Meta, StoryObj } from '@storybook/nextjs';
import { FaHouse } from 'react-icons/fa6';

import { TooltipContainer } from './TooltipContainer';

const meta = {
  title: 'Example/TooltipContainer',
  component: TooltipContainer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '마우스 호버 시 툴팁을 표시하는 컨테이너 컴포넌트입니다.',
      },
    },
  },
  argTypes: {
    position: {
      control: 'select',
      options: ['right', 'top'],
      description: '툴팁의 위치 설정',
    },
    text: {
      control: 'text',
      description: '툴팁에 표시될 텍스트',
    },
    showTooltip: {
      control: 'boolean',
      description: '툴팁 표시 여부',
    },
    children: {
      control: false,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TooltipContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '기본 툴팁',
    position: 'right',
    showTooltip: true,
    children: <button className="border-dotted border-2 rounded-xl px-2 py-1">마우스를 올려보세요</button>,
  },
};

export const RightPosition: Story = {
  args: {
    text: '오른쪽 툴팁',
    position: 'right',
    showTooltip: true,
    children: (
      <div className="rounded-xl p-1">
        <FaHouse />
      </div>
    ),
  },
};

export const TopPosition: Story = {
  args: {
    text: '상단 툴팁',
    position: 'top',
    showTooltip: true,
    children: (
      <div className="rounded-xl p-1">
        <FaHouse />
      </div>
    ),
  },
};
