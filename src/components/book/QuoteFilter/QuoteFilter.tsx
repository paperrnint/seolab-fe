import { Dropdown } from '@/components/common/ui/Dropdown/Dropdown';
import { Txt } from '@/components/common/ui/Txt/Txt';
import { QUOTE_FILTER_OPTIONS } from '@/constants/quote';
import { DropdownOption } from '@/types/ui/common';

interface Props<T extends DropdownOption> {
  count: number;
  option: T;
  onOptionChange: (option: T) => void;
}

export const QuoteFilter = <T extends DropdownOption>({ count, option, onOptionChange }: Props<T>) => {
  return (
    <div className="flex justify-between items-center p-2 pb-0">
      <div className="pl-3 opacity-50">
        <Txt variant="captionXs">총 {count.toLocaleString()} 문장</Txt>
      </div>
      <div>
        <Dropdown.Root>
          <Dropdown.SelectTrigger variant="filter" selectedLabel={option.label} />
          <Dropdown.Content align="right" gap={0}>
            {QUOTE_FILTER_OPTIONS.map((filterOption) => (
              <Dropdown.SelectableItem
                key={filterOption.value}
                variant="sm"
                value={filterOption.value}
                onSelect={onOptionChange}
              >
                {filterOption.label}
              </Dropdown.SelectableItem>
            ))}
          </Dropdown.Content>
        </Dropdown.Root>
      </div>
    </div>
  );
};
