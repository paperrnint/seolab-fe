export type Size = 'sm' | 'lg';

export interface SizeConfig {
  width: number;
  height: number;
}

export const sizeConfig: Record<Size, SizeConfig> = {
  sm: {
    width: 80,
    height: 15,
  },
  lg: {
    width: 160,
    height: 30,
  },
};
