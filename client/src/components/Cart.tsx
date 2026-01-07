import React from "react";
import type { Product } from "../data/products";

interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  items: CartItem[];
  onAdd: (product: Product) => void;
  onRemove: (productId: number) => void;
  onDecrement: (productId: number) => void;
}

export const Cart: React.FC<CartProps> = ({ items, onAdd, onRemove, onDecrement }) => {
  // Calculate total items (optional)
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-72">
      <h2 className="text-lg font-semibold mb-4 border-b pb-2 text-green-700">Cart ({totalItems})</h2>

      {items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between items-center p-2 rounded hover:bg-green-50 transition">
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">x {item.quantity}</p>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={() => onDecrement(item.id)}
                  className="bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition"
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  -
                </button>
                <button
                  onClick={() => onAdd(item)}
                  className="bg-green-100 text-green-700 px-2 py-1 rounded hover:bg-green-200 transition"
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  +
                </button>
                <button
                  onClick={() => onRemove(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                  aria-label={`Remove ${item.name} from cart`}
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {items.length > 0 && (
        <button
          className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition font-semibold"
        >
          Checkout
        </button>
      )}
    </div>
  );
};
