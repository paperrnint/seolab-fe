interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
}

export const Button = ({ children, variant = 'primary', ...props }: Props) => {
  const variantColors = {
    primary: 'bg-btn-primary text-text-btn',
    secondary: 'border border-btn-primary text-primary',
    accent: 'bg-btn-accent text-text-btn',
  };

  const variantShapes = {
    primary: 'px-4 py-2 rounded-full',
    secondary: 'px-4 py-2 rounded-full',
    accent: 'flex items-center w-full gap-2 px-3 py-3 rounded-md',
  };

  return (
    <button
      className={`
        ${variantColors[variant]}
        ${variantShapes[variant]}
        text-sm 
        font-bold 
        cursor-pointer 
        hover:opacity-90 
        transition-opacity
      `}
      {...props}
    >
      {children}
    </button>
  );
};
