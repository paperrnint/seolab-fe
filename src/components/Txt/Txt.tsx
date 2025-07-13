interface Props {
  children: React.ReactNode;
  variant?: 'base' | 'caption' | 'bold' | 'muted';
  truncated?: boolean;
}

export const Txt = ({ children, variant = 'base', truncated = false }: Props) => {
  const classes = {
    base: 'text-primary text-sm leading-7',
    caption: 'text-sm font-bold text-subtle leading-6',
    bold: 'text-primary text-sm font-bold',
    muted: 'text-xs text-text-muted',
  };

  return <div className={`${classes[variant]} ${truncated && 'truncate'}`}>{children}</div>;
};
