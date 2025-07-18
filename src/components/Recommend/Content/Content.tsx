interface Props {
  children: React.ReactNode;
}

export const RecommendContent = ({ children }: Props) => {
  return <div className="pb-3 flex flex-wrap gap-2">{children}</div>;
};
