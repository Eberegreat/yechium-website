import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow-50 text-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-display text-xl font-medium text-brand-primary mb-2">Yechium</h3>
            <p className="text-sm text-brand-dark/70 max-w-sm">
              Nature's pharmacy, bottled for you. Healing and nourishment, right to your doorstep.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-brand-dark mb-3">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="hover:text-brand-primary transition-colors">Our Products</Link></li>
              <li><Link to="/health-solutions" className="hover:text-brand-primary transition-colors">Health Solutions</Link></li>
               <li><Link to="/agricultural-services" className="hover:text-brand-primary transition-colors">Farming & Food</Link></li>
              <li><Link to="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
           <div>
            <h4 className="font-semibold text-brand-dark mb-3">Health Hub</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-brand-primary transition-colors">Blog</Link></li>
              <li><Link to="#" className="hover:text-brand-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-brand-dark mb-3">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://wa.me/2349032709105" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">WhatsApp</a></li>
              <li><a href="https://www.instagram.com/09032709105" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">Instagram</a></li>
              <li><a href="https://www.facebook.com/search/top/?q=Nnadi%20Maryo" target="_blank" rel="noopener noreferrer" className="hover:text-brand-primary transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-brand-primary/20 pt-8 text-center text-sm text-brand-dark/60">
          <p>&copy; {new Date().getFullYear()} Yechium Wellness & Foods. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;