interface Props {
  onClick?: () => void;
}

export const Backdrop = ({ onClick }: Props) => {
  return <div className="fixed inset-0 backdrop-blur-sm transition-opacity duration-300 ease-out" onClick={onClick} />;
};
