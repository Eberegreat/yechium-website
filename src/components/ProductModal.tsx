import React from 'react';
import { Product } from '../types';
import { useLockBodyScroll } from '../hooks/useLockBodyScroll';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
);


const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  useLockBodyScroll();
  const whatsappUrl = `https://wa.me/2349032709105?text=I'm%20interested%20in%20your%20product:%20${encodeURIComponent(product.name)}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-brand-light rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row m-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-dark/50 hover:text-brand-dark transition-colors z-10"
        >
          <XIcon className="h-6 w-6" />
        </button>

        <div className="w-full md:w-1/2 flex-shrink-0">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-8 overflow-y-auto">
          <span className="text-sm font-semibold text-brand-accent uppercase tracking-wider">{product.category}</span>
          <h2 className="font-display text-4xl font-medium text-brand-dark my-3">{product.name}</h2>
          <p className="text-brand-dark/80 mt-4 mb-6">{product.description}</p>
          
          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-brand-dark mb-4">Product Highlights</h3>
            <ul className="space-y-3">
              {product.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-brand-primary flex-shrink-0 mr-3 mt-0.5" />
                  <span className="text-brand-dark/90">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Buy ${product.name} on WhatsApp`}
              className="w-full inline-flex items-center justify-center rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary bg-brand-primary text-white hover:bg-brand-primary/90 h-11 px-8 text-lg"
            >
              Buy on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
