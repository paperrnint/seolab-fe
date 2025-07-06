import type { Meta, StoryObj } from '@storybook/nextjs';
import { FaLock, FaUser } from 'react-icons/fa6';
import { Input } from './Input';

const iconMap = {
  none: null,
  email: <FaUser />,
  password: <FaLock />,
};

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    componentSubtitle: '<input /> 요소를 extends 한 컴포넌트',
    docs: {
      description: {
        component: `
### 사용 시나리오
  - 로그인/회원가입 폼에서 인풋 역할
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    leftIcon: {
      control: { type: 'select' },
      options: Object.keys(iconMap),
      mapping: iconMap,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '280px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'placeholder..',
  },
};

export const WithIcon: Story = {
  args: {
    leftIcon: iconMap.email,
    placeholder: 'email',
  },
};
