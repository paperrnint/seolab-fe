import { Button } from '@/components/Button/Button';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { JoinInput } from './JoinInput';

const buttonMap = {
  none: null,
  authButton: <Button variant="secondary">인증</Button>,
};

const validationsMap = {
  none: null,
  validation: [{ label: '최소 8-20자', isValid: false }],
};

const meta = {
  title: 'Example/JoinInput',
  component: JoinInput,
  parameters: {
    layout: 'centered',
    componentSubtitle: '<input /> 요소를 extends 한 컴포넌트',
    docs: {
      description: {
        component: `
### 사용 시나리오
  - 회원가입 폼에서 인풋 역할
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    rightComponent: {
      control: 'select',
      options: Object.keys(buttonMap),
      mapping: buttonMap,
    },
    validations: {
      control: 'select',
      options: Object.keys(validationsMap),
      mapping: validationsMap,
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '280px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof JoinInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'placeholder..',
  },
};

export const Required: Story = {
  args: {
    label: '이름',
    required: true,
    placeholder: '이름을 입력하세요..',
  },
};

export const HasValidation: Story = {
  args: {
    label: '비밀번호',
    required: true,
    placeholder: '비밀번호를 입력하세요..',
    validations: [{ label: '대소문자, 숫자, 특수문자 포함', isValid: false }],
  },
};
