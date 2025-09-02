import type { Meta, StoryObj } from '@storybook/nextjs';
import { useEffect, useState } from 'react';

import { QUOTE_FILTER_OPTIONS } from '@/constants';
import { DropdownOption } from '@/types/ui/common';

import { Dropdown } from './Dropdown';

const meta = {
  title: 'Example/Dropdown',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      // DOM에 직접 portal 요소 추가
      useEffect(() => {
        if (!document.getElementById('portal')) {
          const portalDiv = document.createElement('div');
          portalDiv.id = 'portal';
          document.body.appendChild(portalDiv);
        }
      }, []);

      return (
        <div style={{ minHeight: '300px', padding: '50px' }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);

    return (
      <Dropdown.Root>
        <Dropdown.SelectTrigger variant="filter" selectedLabel={selectedOption?.label} />
        <Dropdown.Content align="left" gap={0}>
          {QUOTE_FILTER_OPTIONS.map((filterOption) => (
            <Dropdown.SelectableItem
              key={filterOption.value}
              variant="sm"
              value={filterOption.value}
              onSelect={setSelectedOption}
            >
              {filterOption.label}
            </Dropdown.SelectableItem>
          ))}
        </Dropdown.Content>
      </Dropdown.Root>
    );
  },
};
