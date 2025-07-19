interface Props {
  children: React.ReactNode;
}

export const RecommendContent = ({ children }: Props) => {
  return <div className="pb-5 flex flex-wrap gap-2">{children}</div>;
};
