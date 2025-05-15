import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  fullHeight = false,
}) => {
  return (
    <section 
      id={id} 
      className={`section-padding ${fullHeight ? 'min-h-screen flex flex-col justify-center' : ''} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {title && (
          <div className="mb-16 text-center">
            <h2 className="section-title gradient-text">{title}</h2>
            {subtitle && (
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;