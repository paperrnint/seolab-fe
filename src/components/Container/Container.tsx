interface Props {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const maxWidths = {
  sm: 'max-w-sm', // 384px
  md: 'max-w-md', // 448px
  lg: 'max-w-4xl', // 896px
  xl: 'max-w-6xl', // 1152px
  full: 'max-w-full',
};

export const Container = ({ children, size = 'full' }: Props) => {
  return <div className={`w-full mx-auto px-4 ${maxWidths[size]}`}>{children}</div>;
};
