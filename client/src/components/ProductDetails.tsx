import React from "react";
import type { Product } from "../data/products";

interface ProductDetailsProps {
  product?: Product;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  if (!product) return <p className="text-gray-500">Select a product to see details.</p>;

  return (
    <div className="border border-green-500 bg-green-50 p-5 rounded-xl shadow-md mt-4 max-w-sm">
      <h3 className="text-xl font-bold text-green-700 mb-3">{product.name}</h3>
      
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover rounded mb-4"
        />
      )}

      <div className="space-y-1 text-green-800">
        <p><span className="font-semibold">Category:</span> {product.category}</p>
        <p><span className="font-semibold">Price:</span> ${product.price}</p>
        <p><span className="font-semibold">Stock:</span> {product.stock}</p>
        <p><span className="font-semibold">Supplier:</span> {product.supplier}</p>
        <p><span className="font-semibold">Last Restocked:</span> {product.lastRestocked}</p>
      </div>
    </div>
  );
};
