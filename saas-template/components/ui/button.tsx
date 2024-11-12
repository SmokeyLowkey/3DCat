import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'solid';
}

export const Button: React.FC<ButtonProps> = ({ variant = 'solid', className, children, ...props }) => {
  const baseClasses = 'px-4 py-2 rounded font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = variant === 'outline' ? 'border border-blue-600 text-blue-600 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700';

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};
