interface Props {
  children: React.ReactNode;
  height?: number;
  variant?: 'top' | 'bottom';
}

export const ExternalGradient = ({ children, height = 36, variant = 'top' }: Props) => {
  return (
    <div className="relative">
      {variant === 'top' && (
        <div
          className="absolute bg-gradient-to-t from-bg-panel to-transparent pointer-events-none z-10 left-0 right-0"
          style={{
            top: `-${height}px`,
            height: `${height}px`,
          }}
        />
      )}
      <div className="relative">{children}</div>
      {variant === 'bottom' && (
        <div
          className="absolute bg-gradient-to-t from-bg-panel to-transparent pointer-events-none z-10 left-0 right-0"
          style={{
            bottom: `-${height}px`,
            height: `${height}px`,
          }}
        />
      )}
    </div>
  );
};
