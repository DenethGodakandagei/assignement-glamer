import React, { useState, useEffect } from "react";

interface SearchInputProps {
  value: string;
  onChange: (val: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(inputValue);
    }, 300); // debounce 300ms

    return () => clearTimeout(handler);
  }, [inputValue, onChange]);

  return (
    <div className="mb-4">
      <label htmlFor="searchInput" className="block text-green-700 font-semibold mb-2">
        Search Products
      </label>
      <input
        id="searchInput"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type product name..."
        className="
          border border-green-300 
          focus:border-green-500 focus:ring-2 focus:ring-green-200 
          rounded-lg p-3 w-full
          transition-colors duration-200
          placeholder-green-400
        "
      />
    </div>
  );
};
