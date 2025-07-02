import { DropdownOption } from '@/types';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Dropdown } from './Dropdown';

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
  render: (args) => (
    <Dropdown.Root {...args}>
      <Dropdown.Trigger />
      <Dropdown.Content>
        <Dropdown.Item value="option1">옵션 1</Dropdown.Item>
        <Dropdown.Item value="option2">옵션 2</Dropdown.Item>
        <Dropdown.Item value="option3">옵션 3</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  ),
};

export const LongOptions: Story = {
  render: (args) => (
    <Dropdown.Root {...args}>
      <Dropdown.Trigger placeholder="주제" />
      <Dropdown.Content>
        {[
          { label: '가정원예', value: 'homeGardening' },
          { label: '홈인테리어/수납', value: 'homeInteriorStorage' },
          { label: '생활공예/DIY', value: 'lifeCraftDiy' },
          { label: '레크레이션/게임', value: 'recreationGames' },
          { label: '퀴즈/퍼즐/스도쿠', value: 'quizPuzzleSudoku' },
        ].map((country) => (
          <Dropdown.Item key={country.value} value={country.value}>
            {country.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Content>
    </Dropdown.Root>
  ),
};
