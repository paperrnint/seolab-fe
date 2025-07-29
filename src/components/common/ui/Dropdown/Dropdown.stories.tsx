import type { Meta, StoryObj } from '@storybook/nextjs';
import { useState } from 'react';

import { DropdownOption } from '@/types/ui/common';

import { Dropdown } from './Dropdown';
import { DropdownLabel } from './DropdownLabel/DropdownLabel';

interface DropdownStoryArgs {
  defaultOption?: DropdownOption | null;
}

const meta = {
  title: 'Example/Dropdown',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultOption: {
      control: 'object',
      description: 'Initial selected option as {label, value}',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '200px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<DropdownStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);

    return (
      <Dropdown.Root>
        <Dropdown.SelectTrigger selectedLabel={selectedOption?.label} placeholder="선택" />
        <Dropdown.Content>
          <Dropdown.SelectableItem value="option1" onSelect={setSelectedOption}>
            옵션 1
          </Dropdown.SelectableItem>
          <Dropdown.SelectableItem value="option2" onSelect={setSelectedOption}>
            옵션 2
          </Dropdown.SelectableItem>
          <Dropdown.SelectableItem value="option3" onSelect={setSelectedOption}>
            옵션 3
          </Dropdown.SelectableItem>
        </Dropdown.Content>
      </Dropdown.Root>
    );
  },
};

export const LongOptionsSelect: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);

    const options = [
      { label: '가정원예', value: 'homeGardening' },
      { label: '홈인테리어/수납', value: 'homeInteriorStorage' },
      { label: '생활공예/DIY', value: 'lifeCraftDiy' },
      { label: '레크레이션/게임', value: 'recreationGames' },
      { label: '퀴즈/퍼즐/스도쿠', value: 'quizPuzzleSudoku' },
    ];

    return (
      <Dropdown.Root>
        <Dropdown.SelectTrigger selectedLabel={selectedOption?.label} placeholder="주제를 선택하세요" />
        <Dropdown.Content>
          {options.map((option) => (
            <Dropdown.SelectableItem key={option.value} value={option.value} onSelect={setSelectedOption}>
              {option.label}
            </Dropdown.SelectableItem>
          ))}
        </Dropdown.Content>
      </Dropdown.Root>
    );
  },
};

export const MoreMenuDropdown: Story = {
  render: () => (
    <div className="w-full flex justify-end">
      <Dropdown.Root>
        <Dropdown.MoreTrigger />
        <Dropdown.Content align="right">
          <Dropdown.Item onClick={() => alert('편집 클릭됨')}>
            <DropdownLabel>수정하기</DropdownLabel>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => alert('복사 클릭됨')}>
            <DropdownLabel>URL 복사</DropdownLabel>
          </Dropdown.Item>
          <Dropdown.Item onClick={() => alert('삭제 클릭됨')}>
            <DropdownLabel isSensitive={true}>삭제하기</DropdownLabel>
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown.Root>
    </div>
  ),
};
