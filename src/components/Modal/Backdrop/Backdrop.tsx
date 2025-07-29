interface Props {
  onClick?: () => void;
}

export const Backdrop = ({ onClick }: Props) => {
  return (
    <div
      data-testid="modal-backdrop"
      className="fixed inset-0 bg-black/30 backdrop-blur-xs transition-all duration-300 ease-out z-10"
      onClick={onClick}
    />
  );
};
