interface Props {
  children: React.ReactNode;
  variant?: 'base' | 'caption' | 'captionSm' | 'captionXs' | 'bold' | 'muted';
  truncated?: boolean;
}

export const Txt = ({ children, variant = 'base', truncated = false }: Props) => {
  const classes = {
    base: 'text-primary text-sm leading-7',
    caption: 'text-sm font-bold text-subtle leading-6',
    captionSm: 'text-xs font-bold text-subtle leading-5',
    captionXs: 'text-[10px] font-bold text-subtle leading-5',
    bold: 'text-primary text-sm font-bold',
    muted: 'text-xs text-text-muted',
  };

  return <p className={`${classes[variant]} ${truncated && 'truncate'}`}>{children}</p>;
};
