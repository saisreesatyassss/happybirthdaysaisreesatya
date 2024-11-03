// src/app/components/ui/Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string; // Make className optional
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => { // Provide a default value
  return (
    <button
      className={`bg-[#4299E1] text-white hover:bg-[#3182CE] font-bold py-3 px-6 rounded-full text-lg shadow-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
