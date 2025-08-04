export const btnConfig = {
  base: 'flex gap-1 items-center text-sm font-bold flex-shrink-0 focus:outline-none',

  sizes: {
    '2xs': 'px-2 py-1.5 text-[10px]',
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-3 py-2 text-xs',
    md: 'px-4 py-2',
    lg: 'px-4 py-2 text-base leading-8',
    xl: 'px-4 py-2 text-lg leading-8',
  },

  variants: {
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
    transparent: {
      fill: 'bg-transparent text-secondary',
      outline: 'bg-transparent text-secondary',
    },
  },

  shapes: {
    square: 'rounded-md',
    circular: 'rounded-full',
    rounded: 'rounded-xl',
  },

  widths: {
    fit: 'w-fit',
    full: 'w-full',
  },

  disabled: 'opacity-40 cursor-not-allowed',
  enabled: 'cursor-pointer hover:opacity-90 transition-opacity',
} as const;

export type ButtonSize = keyof typeof btnConfig.sizes;
export type ButtonVariant = keyof typeof btnConfig.variants;
export type ButtonShape = keyof typeof btnConfig.shapes;
export type ButtonWidth = keyof typeof btnConfig.widths;
