import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => {
  const baseClasses = "relative text-sm font-medium transition-colors hover:text-brand-primary";
  const activeClasses = "text-brand-primary after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-brand-primary";
  
  return (
    <NavLink 
      to={to} 
      onClick={onClick}
      className={({ isActive }) => `${baseClasses} ${isActive ? activeClasses : 'text-brand-dark/70'}`}
    >
      {children}
    </NavLink>
  );
};


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-brand-light/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2">
             <img src="https://res.cloudinary.com/dn2mgiges/image/upload/v1751379223/logo_xzaa5f.jpg" alt="Yechium Wellness and Foods Logo" className="h-12 w-auto" />
          </NavLink>
          <nav className="hidden md:flex items-center space-x-6">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/products">Our Products</NavItem>
            <NavItem to="/health-solutions">Health Solutions</NavItem>
            <NavItem to="/agricultural-services">Farming & Food</NavItem>
            <NavItem to="/about">About Us</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark hover:text-brand-primary focus:outline-none">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-light border-b border-gray-200 shadow-lg">
          <nav className="flex flex-col items-center space-y-4 p-6">
            <NavItem to="/" onClick={() => setIsMenuOpen(false)}>Home</NavItem>
            <NavItem to="/products" onClick={() => setIsMenuOpen(false)}>Our Products</NavItem>
            <NavItem to="/health-solutions" onClick={() => setIsMenuOpen(false)}>Health Solutions</NavItem>
            <NavItem to="/agricultural-services" onClick={() => setIsMenuOpen(false)}>Farming & Food</NavItem>
            <NavItem to="/about" onClick={() => setIsMenuOpen(false)}>About Us</NavItem>
            <NavItem to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavItem>
          </nav>
        </div>
      )}
    </header>
  );
}
