import type { Meta, StoryObj } from '@storybook/nextjs';

import { QuoteInput } from './QuoteInput';

interface QuoteInputWrapperProps {
  variant: 'simple' | 'edit';
  initialPage?: string;
  initialText?: string;
  minLine?: number;
  showUpdatedAt?: boolean;
  bg?: 'card' | 'body';
}

const QuoteInputWrapper = ({
  variant,
  initialPage = '',
  initialText = '',
  minLine = 3,
  showUpdatedAt = true,
  bg = 'card',
}: QuoteInputWrapperProps) => {
  const handleSubmit = () => {
    console.log('submit');
  };

  const handleCancel = () => {
    console.log('Quote cancelled');
  };

  if (variant === 'simple') {
    return (
      <div className="w-full max-w-4xl mx-auto px-2 pb-2">
        <div className="bg-gradient-to-b from-background/0 to-background" style={{ height: 48 }}>
          <QuoteInput.Root onSubmit={handleSubmit} shouldResetField>
            <QuoteInput.Container>
              <QuoteInput.InputField />
            </QuoteInput.Container>
          </QuoteInput.Root>
        </div>
      </div>
    );
  }

  return (
    <QuoteInput.Root initialPage={initialPage} initialText={initialText} onSubmit={handleSubmit}>
      <QuoteInput.Container bg={bg}>
        <QuoteInput.InputField minLine={minLine} />
        <QuoteInput.Action>
          {showUpdatedAt && <p className="text-[10px] text-subtle">2025.01.15 14:30</p>}
          <QuoteInput.CancelButton onCancel={handleCancel}>취소</QuoteInput.CancelButton>
          <QuoteInput.SubmitButton>수정</QuoteInput.SubmitButton>
        </QuoteInput.Action>
      </QuoteInput.Container>
    </QuoteInput.Root>
  );
};

const meta = {
  title: 'Example/QuoteInput',
  component: QuoteInputWrapper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['simple', 'edit'],
      description: 'QuoteInput의 사용 패턴',
    },
    initialPage: {
      control: { type: 'text' },
      description: '초기 페이지 값',
      if: { arg: 'variant', eq: 'edit' },
    },
    initialText: {
      control: { type: 'text' },
      description: '초기 텍스트 값',
      if: { arg: 'variant', eq: 'edit' },
    },
    minLine: {
      control: { type: 'number', min: 1, max: 10 },
      description: '최소 줄 수',
      if: { arg: 'variant', eq: 'edit' },
    },
    bg: {
      control: { type: 'radio' },
      options: ['card', 'default'],
      description: '배경 스타일',
      if: { arg: 'variant', eq: 'edit' },
    },
    showUpdatedAt: {
      control: { type: 'boolean' },
      description: '업데이트 시간 표시 여부',
      if: { arg: 'variant', eq: 'edit' },
    },
  },
} satisfies Meta<typeof QuoteInputWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const New: Story = {
  args: {
    variant: 'simple',
  },
  parameters: {
    docs: {
      description: {
        story: '새로운 문장을 추가할 때 사용하는 input 형태',
      },
    },
  },
};

export const Edit: Story = {
  args: {
    variant: 'edit',
    initialPage: '10',
    initialText: '기존에 입력된 문장',
    minLine: 1,
    bg: 'card',
    showUpdatedAt: true,
  },
  parameters: {
    docs: {
      description: {
        story: '기존 문장을 수정할 때 사용하는 input 형태 (초기값과 액션 버튼 포함)',
      },
    },
  },
};
