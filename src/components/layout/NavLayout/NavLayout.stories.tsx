import type { Meta, StoryObj } from '@storybook/nextjs';

import { NavLayout } from './NavLayout';

const meta = {
  title: 'Layout/NavLayout',
  component: NavLayout,
  parameters: {
    layout: 'padded',
    componentSubtitle: '네비게이션 바를 포함한 레이아웃',
    docs: {
      description: {
        component: `
- 미디어쿼리를 사용하여 모바일/데스크탑에서 다른 네비게이션 바 모양
- 모바일: 메뉴 아이콘 클릭 시 열림, backdrop 클릭 시 닫힘
- 데스크탑: 메뉴 아이콘 클릭 시 열림/닫힘
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof NavLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '컨텐츠',
  },
};
