import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'solid' | 'glass' | 'outlined';
  animate?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'solid',
  animate = false,
}) => {
  const variantClasses = {
    solid: 'bg-white dark:bg-gray-800 shadow-lg',
    glass: 'bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 shadow-xl',
    outlined: 'border border-gray-200 dark:border-gray-700',
  };
  
  const baseClasses = 'rounded-2xl overflow-hidden';
  const animateClasses = animate ? 'animate-on-scroll' : '';
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${animateClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;