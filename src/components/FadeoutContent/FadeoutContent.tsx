interface Props {
  children: React.ReactNode;
  height?: number;
}

export const FadeoutContent = ({ children, height }: Props) => {
  return (
    <div style={{ height: `${height}px` }}>
      <div className="relative overflow-hidden h-full">
        {children}
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-bg-body to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
