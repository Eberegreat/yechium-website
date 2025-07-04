import React from 'react';
import { Product } from '../types';
import { Card, CardContent } from './ui/Card';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const whatsappUrl = `https://wa.me/2349032709105?text=I'm%20interested%20in%20your%20product:%20${encodeURIComponent(product.name)}`;

  return (
    <Card 
      className={`group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <p className="text-sm text-gray-500 mb-1">{product.category}</p>
          <h3 className="font-display font-medium text-lg text-brand-dark">{product.name}</h3>
        </div>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => { e.stopPropagation(); }}
          aria-label={`Buy ${product.name} on WhatsApp`}
          className="mt-4 inline-flex items-center justify-center rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary bg-brand-primary text-white hover:bg-brand-primary/90 h-9 px-3 text-sm w-full"
        >
          Buy on WhatsApp
        </a>
      </CardContent>
    </Card>
  );
};

export default ProductCard;