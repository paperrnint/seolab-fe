import { useDropdown } from '../@context/DropdownContext';

interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children: React.ReactNode;
  onClick?: () => void;
  shouldClose?: boolean;
}

export const DropdownItem = ({ children, onClick, shouldClose = true, ...props }: Props) => {
  const { onClose } = useDropdown();

  const onClickItem = () => {
    onClick?.();
    if (shouldClose) {
      onClose();
    }
  };

  return (
    <button
      className="
        flex gap-2
        w-full px-3 py-2 
        cursor-pointer hover:bg-bg-hover
      "
      onClick={onClickItem}
      {...props}
    >
      <div className="w-full text-primary leading-6">{children}</div>
    </button>
  );
};
