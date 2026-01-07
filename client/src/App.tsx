import React, { useState, useEffect } from "react";
import { SearchInput } from "./components/SearchInput";
import { ProductDetails } from "./components/ProductDetails";
import { useDebounce } from "./hooks/useDebounce";
import { products as productData } from "./data/products";
import type { Product } from "./data/products";
import { useCart } from "./context/CartContext";
import CartModal from "./components/CartModel";

import { EmptyState } from "./components/EmptyState";
import { ErrorState } from "./components/ErrorState";
import { Loading } from "./components/Loading";

const App: React.FC = () => {
  const { addToCart } = useCart();

  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 300);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(productData);
  const [highlightedProduct, setHighlightedProduct] = useState<Product | undefined>();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Simulate async search
  const simulateSearch = async (query: string) => {
    setLoading(true);
    setError(false);
    try {
      await new Promise((r) => setTimeout(r, 500)); // simulate delay
      const term = query.trim().toLowerCase();
      const filtered = term
        ? productData.filter((p) => p.name.toLowerCase().includes(term))
        : productData;
      setFilteredProducts(filtered);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Search effect
  useEffect(() => {
    simulateSearch(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
        Inventory Ordering Interface
      </h1>

      {/* Search + Cart button */}
      <div className="flex justify-between items-center mb-6">
        <div className="w-full md:w-3/4">
          <SearchInput value={searchTerm} onChange={setSearchTerm} />
        </div>
        <button
          onClick={() => setIsCartOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded ml-4 cursor-pointer"
        >
          Cart
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorState message="Failed to load products" onRetry={() => simulateSearch(debouncedSearch)} />
      ) : filteredProducts.length === 0 ? (
        <EmptyState message="No products found." />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-green-300 rounded-lg shadow-sm p-4 flex flex-col items-center transition-transform hover:scale-105 cursor-pointer"
              onClick={() => setHighlightedProduct(product)}
            >
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded mb-3"
                />
              )}
              <h3 className="font-bold text-green-700 mb-1 text-center">{product.name}</h3>
              <p className="text-green-800 font-semibold mb-2">${product.price}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(product);
                }}
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-1 px-3 rounded cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Product details */}
      {highlightedProduct && (
        <div className="mt-6">
          <ProductDetails product={highlightedProduct} />
        </div>
      )}

      {/* Cart modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default App;
