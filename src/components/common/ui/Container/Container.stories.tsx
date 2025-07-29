import type { Meta, StoryObj } from '@storybook/nextjs';

import { Container } from './Container';

const meta = {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'sm',
    children:
      '풍요로운 색채와 향기, 아름다움으로 가득한 건축가의 일상! 제64회 요미우리문학상 수상작 『여름은 오래 그곳에 남아』. 일본 문단의 정통성을 잇는 신인 마쓰이에 마사시의 데뷔작으로, 데뷔작이라고는 믿을 수 없는 완성도라는 극찬을 받은 작품이다. 인간을 격려하고 삶을 위하는 건축을 추구하는 노건축가와 그의 건축에 대한 철학과 열정을 존경하는 주인공 ‘나’의 아름다운 여름날을 담고 있다.',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children:
      '풍요로운 색채와 향기, 아름다움으로 가득한 건축가의 일상! 제64회 요미우리문학상 수상작 『여름은 오래 그곳에 남아』. 일본 문단의 정통성을 잇는 신인 마쓰이에 마사시의 데뷔작으로, 데뷔작이라고는 믿을 수 없는 완성도라는 극찬을 받은 작품이다. 인간을 격려하고 삶을 위하는 건축을 추구하는 노건축가와 그의 건축에 대한 철학과 열정을 존경하는 주인공 ‘나’의 아름다운 여름날을 담고 있다.',
  },
};

export const Full: Story = {
  args: {
    size: 'full',
    children:
      '풍요로운 색채와 향기, 아름다움으로 가득한 건축가의 일상! 제64회 요미우리문학상 수상작 『여름은 오래 그곳에 남아』. 일본 문단의 정통성을 잇는 신인 마쓰이에 마사시의 데뷔작으로, 데뷔작이라고는 믿을 수 없는 완성도라는 극찬을 받은 작품이다. 인간을 격려하고 삶을 위하는 건축을 추구하는 노건축가와 그의 건축에 대한 철학과 열정을 존경하는 주인공 ‘나’의 아름다운 여름날을 담고 있다.',
  },
};
