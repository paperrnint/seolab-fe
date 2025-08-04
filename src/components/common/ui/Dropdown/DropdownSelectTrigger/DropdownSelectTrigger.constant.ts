export const selectTriggerConfig = {
  default: {
    btnVariant: 'subtle',
    btnSize: 'sm',
    iconSize: 10,
  },
  filter: {
    btnVariant: 'transparent',
    btnSize: '2xs',
    iconSize: 8,
  },
} as const;

export type SelectTriggerVariant = keyof typeof selectTriggerConfig;
