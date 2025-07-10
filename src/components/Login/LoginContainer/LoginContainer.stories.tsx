import type { Meta, StoryObj } from '@storybook/nextjs';

import { LoginHeader } from '../LoginHeader/LoginHeader';

import { LoginContainer } from './LoginContainer';

const nodeMap = {
  full: (
    <div className="bg-blue-50 rounded-xl">
      <div className="w-full p-2 border-2 border-dotted rounded-xl">컨텐츠 부분</div>
    </div>
  ),
  fit: (
    <div className="bg-blue-50  rounded-xl">
      <div className="w-fit p-2 border-2 border-dotted rounded-xl">컨텐츠 부분</div>
    </div>
  ),
};

const meta = {
  title: 'Login/LoginContainer',
  component: LoginContainer,
  parameters: {
    layout: 'padded',
    componentSubtitle: '로그인 컴포넌트들을 감싸는 레이아웃 컨테이너',
    docs: {
      description: {
        component: `
> 아래 컨테이너 부분을 하늘색, 컨텐츠 부분을 border 로 구분함

- max width 설정 (336px)
- flex shrink 0 으로 너비 고정
- padding 설정 (모바일, 데스크탑 차이 있음)
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'select',
      options: Object.keys(nodeMap),
      mapping: nodeMap,
    },
  },
  decorators: [
    (Story) => (
      <div className="flex justify-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof LoginContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: nodeMap.full,
  },
  parameters: {
    docs: {
      description: '컨테이너는 파란색 배경으로, 내부 컨텐츠는 border 로 구분하였습니다.',
    },
  },
};

export const WithLoginComponents: Story = {
  args: {
    children: (
      <>
        <LoginHeader label="로그인하고 기록 시작하기" />
      </>
    ),
  },
};
