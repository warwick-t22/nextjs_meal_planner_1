import React from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="mb-8">
      <h1 className="notion-heading text-primary-600">{title}</h1>
      {subtitle && <p className="notion-text text-lg">{subtitle}</p>}
    </header>
  );
};

export default Header;
