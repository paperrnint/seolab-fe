interface Props {
  children: React.ReactNode;
  variant?: 'base' | 'caption' | 'muted';
}

export const Txt = ({ children, variant = 'base' }: Props) => {
  const classes = {
    base: 'text-primary text-sm leading-7',
    caption: 'text-sm font-bold text-subtle',
    muted: 'text-xs text-text-muted',
  };

  return <div className={classes[variant]}>{children}</div>;
};
