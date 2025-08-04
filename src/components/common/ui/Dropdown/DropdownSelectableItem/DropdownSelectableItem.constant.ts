export const selectableItemConfig = {
  default: {
    text: 'text-sm',
    spacing: 'px-3 py-2',
  },
  sm: {
    text: 'text-[10px]',
    spacing: 'px-2.5 py-1.5',
  },
} as const;

export type SelectableItemVariant = keyof typeof selectableItemConfig;
