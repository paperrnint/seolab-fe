interface Props {
  children: React.ReactNode;
  height?: number;
  variant?: 'top' | 'bottom';
  bg?: 'body' | 'panel';
}

export const ExternalGradient = ({ children, height = 36, variant = 'top', bg = 'body' }: Props) => {
  const baseClass = 'absolute to-transparent pointer-events-none z-10 left-0 right-0';
  const fromBgs = {
    body: 'from-bg-body',
    panel: 'from-bg-panel',
  };

  return (
    <div className="relative">
      {variant === 'top' && (
        <div
          className={`bg-gradient-to-t ${baseClass} ${fromBgs[bg]}`}
          style={{
            top: `-${height}px`,
            height: `${height}px`,
          }}
        />
      )}
      <div className="relative">{children}</div>
      {variant === 'bottom' && (
        <div
          className={`bg-gradient-to-b ${baseClass} ${fromBgs[bg]}`}
          style={{
            bottom: `-${height}px`,
            height: `${height}px`,
          }}
        />
      )}
    </div>
  );
};
