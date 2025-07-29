export type Align = 'left' | 'right' | 'left-outside' | 'right-outside';
export type Position = 'top' | 'bottom';
export type Width = 'fit' | 'auto';

export const alignClasses: Record<Align, string> = {
  left: 'left-0',
  right: 'right-0',
  'left-outside': 'right-full',
  'right-outside': 'left-full',
};

export const positionClasses: Record<Position, string> = {
  top: 'bottom-full',
  bottom: 'top-full',
};
