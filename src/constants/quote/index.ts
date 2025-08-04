export const QUOTE_FILTER_OPTIONS = [
  {
    label: '전체',
    value: 'all',
  },
  {
    label: '즐겨찾기',
    value: 'favorite',
  },
] as const;

export type FilterOption = (typeof QUOTE_FILTER_OPTIONS)[number];
