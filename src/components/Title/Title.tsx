interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

// @todo: variation 추가
export const Title = ({ children, ...props }: Props) => {
  return (
    <h2 className="text-xl leading-7 font-bold" {...props}>
      {children}
    </h2>
  );
};
