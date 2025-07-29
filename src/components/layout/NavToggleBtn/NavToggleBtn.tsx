import { FaBars } from 'react-icons/fa6';

interface Props extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  onClick: () => void;
}
export const NavToggleBtn = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className="p-2 rounded-md hover:bg-btn-subtle cursor-pointer">
      <FaBars size={16} className="text-subtle" />
    </button>
  );
};
