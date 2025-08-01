type Shape = 'square' | 'circular' | 'rounded';
type Width = 'fit' | 'full';
type Align = 'left' | 'center';
type Color = 'primary' | 'secondary' | 'accent' | 'subtle' | 'emp';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type Type = 'fill' | 'outline';

export interface ButtonConfig {
  shape: Shape;
  width: Width;
  align: Align;
  color: Color;
  size: Size;
  type: Type;
}

export const shapes = {
  square: 'rounded-md',
  circular: 'rounded-full',
  rounded: 'rounded-xl',
} as const;

export const widths = {
  fit: 'w-fit',
  full: 'w-full',
} as const;

export const aligns = {
  left: 'text-left',
  center: 'text-center',
} as const;

export const colors = {
  primary: {
    fill: 'bg-btn-primary text-text-btn border border-primary',
    outline: 'bg-transparent text-btn-primary border border-primary',
  },
  secondary: {
    fill: 'bg-secondary text-text-btn border border-secondary',
    outline: 'bg-transparent text-secondary border border-secondary/50',
  },
  accent: {
    fill: 'bg-btn-accent text-text-btn shadow-default',
    outline: 'bg-transparent text-btn-accent border border-accent shadow-default',
  },
  subtle: {
    fill: 'bg-btn-subtle text-secondary',
    outline: 'bg-transparent text-subtle border border-subtle',
  },
  emp: {
    fill: 'bg-emp text-text-btn',
    outline: 'bg-transparent text-emp border border-emp',
  },
} as const;

export const sizes = {
  xs: 'px-3 py-1.5 text-xs',
  sm: 'px-3 py-2 text-xs',
  md: 'px-4 py-2',
  lg: 'px-4 py-2 text-base leading-8',
  xl: 'px-4 py-2 text-lg leading-8',
} as const;

export const btnConfig: Record<string, ButtonConfig> = {
  primary: {
    shape: 'circular',
    width: 'fit',
    align: 'center',
    color: 'primary',
    size: 'md',
    type: 'fill',
  },
  secondary: {
    shape: 'circular',
    width: 'fit',
    align: 'center',
    color: 'primary',
    size: 'md',
    type: 'outline',
  },
  accent: {
    shape: 'square',
    width: 'full',
    align: 'left',
    color: 'accent',
    size: 'lg',
    type: 'fill',
  },
  dropdown: {
    shape: 'circular',
    width: 'fit', // min-w-20
    align: 'left',
    color: 'subtle',
    size: 'sm',
    type: 'fill',
  },
  form: {
    shape: 'rounded',
    width: 'full',
    align: 'center',
    color: 'primary',
    size: 'xl',
    type: 'fill',
  },
  inner: {
    shape: 'square',
    width: 'fit',
    align: 'center',
    color: 'subtle',
    size: 'sm',
    type: 'fill',
  },
  navEdit: {
    shape: 'circular',
    width: 'fit',
    align: 'center',
    color: 'subtle',
    size: 'xs',
    type: 'fill',
  },
  navConfirm: {
    shape: 'circular',
    width: 'fit',
    align: 'center',
    color: 'primary',
    size: 'xs',
    type: 'fill',
  },
  query: {
    shape: 'circular',
    width: 'fit',
    align: 'center',
    color: 'secondary',
    size: 'xs',
    type: 'outline',
  },
  edit: {
    shape: 'square',
    width: 'fit',
    align: 'center',
    color: 'accent',
    size: 'xs',
    type: 'fill',
  },
  cancel: {
    shape: 'square',
    width: 'fit',
    align: 'center',
    color: 'subtle',
    size: 'xs',
    type: 'fill',
  },
  confirmModalCancel: {
    shape: 'square',
    width: 'fit',
    align: 'center',
    color: 'subtle',
    size: 'md',
    type: 'fill',
  },
  confirmModalConfirm: {
    shape: 'square',
    width: 'fit',
    align: 'center',
    color: 'primary',
    size: 'md',
    type: 'fill',
  },
  delete: {
    shape: 'square',
    width: 'fit',
    align: 'center',
    color: 'emp',
    size: 'md',
    type: 'fill',
  },
} as const;

export type ButtonVariant = keyof typeof btnConfig;
