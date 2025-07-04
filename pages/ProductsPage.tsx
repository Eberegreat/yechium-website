
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import { Product } from '../types';

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error(`Network response was not ok`);
        }
        const data: Product[] = await response.json();
        setProducts(data);
        setFilteredProducts(data);
        
        // Extract unique categories
        const uniqueCategories = ['All', ...Array.from(new Set(data.map(p => p.category)))];
        setCategories(uniqueCategories);

      } catch (e) {
        if (e instanceof Error) {
            setError(e.message);
        } else {
            setError("An unknown error occurred while fetching products.");
        }
        console.error("Failed to fetch products:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (activeCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === activeCategory));
    }
  }, [activeCategory, products]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const renderContent = () => {
    if (loading) {
      return (
         Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden animate-pulse">
                <div className="aspect-square w-full bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-5 bg-gray-200 rounded w-1/2"></div>
                </div>
            </div>
         ))
      );
    }

    if (error) {
      return (
        <div className="col-span-full bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md text-center" role="alert">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline"> Could not load products. Please try again later.</span>
        </div>
      );
    }

    return filteredProducts.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        onClick={() => handleProductClick(product)}
      />
    ));
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
                {categories.map(category => (
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
            {renderContent()}
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