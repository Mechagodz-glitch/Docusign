import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' };

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', ...props }) => {
  const base = 'rounded-[0.3vw] px-4 py-2 font-semibold transition';
  const styles =
    variant === 'primary'
      ? 'bg-[var(--color-primary)] text-white hover:bg-[#00557a]'
      : 'bg-[var(--color-primary-soft)] text-[var(--color-primary)] hover:bg-[#e6f2f8]';
  return <button className={`${base} ${styles} ${className}`} {...props} />;
};

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className = '', ...props }) => (
  <div
    className={`bg-white rounded-[0.3vw] shadow-sm border border-[var(--color-border-subtle)] p-4 ${className}`}
    {...props}
  />
);
