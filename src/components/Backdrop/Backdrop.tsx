interface Props {
  onClick?: () => void;
}

export const Backdrop = ({ onClick }: Props) => {
  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-xs transition-all duration-300 ease-out"
      onClick={onClick}
    />
  );
};
