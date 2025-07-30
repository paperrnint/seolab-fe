import { FaCircleExclamation } from 'react-icons/fa6';

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  variant?: 'base' | 'error';
}

// @todo: variation 추가
export const Title = ({ children, variant = 'base', ...props }: Props) => {
  if (variant === 'base') {
    return (
      <h2 className="text-xl leading-7 font-bold" {...props}>
        {children}
      </h2>
    );
  }

  if (variant === 'error') {
    return (
      <div className="w-full my-2 text-center">
        <div className="flex flex-col gap-3 w-full">
          <div className="flex justify-center items-center text-2xl text-subtle">
            <FaCircleExclamation />
          </div>
          <h2 className="text-primary text-sm font-bold">{children}</h2>
        </div>
      </div>
    );
  }
};
