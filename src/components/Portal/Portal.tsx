import ReactDOM from 'react-dom';

interface Props {
  children: React.ReactNode;
}

export const Portal = ({ children }: Props) => {
  const el = typeof window !== 'undefined' && document.querySelector(`#portal`);
  return el && children ? ReactDOM.createPortal(children, el) : null;
};
