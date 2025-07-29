interface Props {
  children: React.ReactNode;
  gradientSize?: number;
  directions: ('top' | 'bottom' | 'right' | 'left')[];
  bg?: 'body' | 'panel';
}

export const InternalGradient = ({ children, gradientSize = 48, directions, bg = 'body' }: Props) => {
  const fromBgs = {
    body: 'from-bg-body',
    panel: 'from-bg-panel',
  };

  const gradientClasses = {
    top: `bg-gradient-to-b ${fromBgs[bg]} to-transparent top-0 left-0 right-0`,
    bottom: `bg-gradient-to-t ${fromBgs[bg]} to-transparent bottom-0 left-0 right-0`,
    right: `bg-gradient-to-l ${fromBgs[bg]} to-transparent right-0 top-0 bottom-0`,
    left: `bg-gradient-to-r ${fromBgs[bg]} to-transparent left-0 top-0 bottom-0`,
  };

  const gradientStyle = {
    top: { height: `${gradientSize}px` },
    bottom: { height: `${gradientSize}px` },
    right: { width: `${gradientSize}px` },
    left: { width: `${gradientSize}px` },
  };

  return (
    <div className="relative overflow-hidden h-full">
      {children}
      {directions.map((direction) => (
        <div
          key={direction}
          className={`z-20 absolute pointer-events-none ${gradientClasses[direction]}`}
          style={gradientStyle[direction]}
        />
      ))}
    </div>
  );
};
