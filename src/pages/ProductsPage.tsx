
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { Product } from '../types';
import productsData from '../data/products.json';

// Get all products and categories directly from the imported JSON
const allProducts: Product[] = productsData;
const allCategories = ['All', ...Array.from(new Set(allProducts.map(p => p.category)))];

const ProductsPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(allProducts.filter(p => p.category === activeCategory));
    }
  }, [activeCategory]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
       <div className="bg-white">
        {/* Hero Section */}
        <section className="relative bg-brand-dark text-white py-20 md:py-28 text-center">
            <div className="absolute inset-0">
                <img src="https://res.cloudinary.com/dn2mgiges/image/upload/v1750973913/panoramic_s2cq1i.png" alt="Yechium Product Line" className="w-full h-full object-cover opacity-30"/>
            </div>
             <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <h1 className="text-4xl md:text-6xl font-display font-semibold leading-tight">Nature's Pharmacy, Bottled For You.</h1>
                <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
                    Every product we offer is a testament to our belief in purity and potency. We use 100% organic ingredients, carefully selected and blended to deliver practical, noticeable results. Explore our complete range of solutions, categorized for your specific health needs.
                </p>
            </div>
       </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            {/* Category Filters */}
            <div className="mb-12 flex flex-wrap justify-center gap-2 md:gap-4">
                {allCategories.map(category => (
                    <button 
                        key={category} 
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                            activeCategory === category 
                            ? 'bg-brand-primary text-white shadow' 
                            : 'bg-yellow-100 text-brand-dark hover:bg-yellow-200'
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        </div>
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default ProductsPage;
