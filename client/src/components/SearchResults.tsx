import React, { useState, useEffect } from "react";
import { products } from "../data/products";

type Product = typeof products[number];

interface SearchResultsProps {
  results: Product[];
  loading: boolean;
  error: boolean;
  onSelect: (product: Product) => void;
  onRetry: () => void;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  loading,
  error,
  onSelect,
  onRetry,
}) => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    setHighlightedIndex(0);
  }, [results]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      results[highlightedIndex] && onSelect(results[highlightedIndex]);
    }
  };

  if (loading)
    return <p className="text-green-700 font-medium mt-2">Loading products...</p>;

  if (error)
    return (
      <div className="mt-2 text-red-600">
        <p>Error occurred!</p>
        <button
          onClick={onRetry}
          className="mt-1 text-green-700 underline hover:text-green-900"
        >
          Retry
        </button>
      </div>
    );

  if (results.length === 0)
    return <p className="mt-2 text-gray-500">No results found.</p>;

  return (
    <ul
      className="border border-green-300 rounded-lg mt-2 max-h-64 overflow-y-auto shadow-sm"
      role="listbox"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {results.map((product, index) => (
        <li
          key={product.id}
          role="option"
          aria-selected={highlightedIndex === index}
          className={`
            p-3 cursor-pointer transition-colors duration-200
            ${highlightedIndex === index ? "bg-green-200 font-semibold" : "hover:bg-green-50"}
            border-b last:border-b-0 border-green-100
          `}
          onMouseEnter={() => setHighlightedIndex(index)}
          onClick={() => onSelect(product)}
        >
          <div className="flex justify-between items-center">
            <span>{product.name}</span>
            <span className="font-medium text-green-800">${product.price}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};
