import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => (
  <div className={`bg-white border border-brand-secondary/60 rounded-lg shadow-sm overflow-hidden ${className}`} {...props}>
    {children}
  </div>
);

const CardHeader: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const CardContent: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

const CardFooter: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

export { Card, CardHeader, CardContent, CardFooter };
