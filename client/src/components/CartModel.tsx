import React from "react";
import { Cart } from "./Cart";
import { useCart } from "../context/CartContext";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { items, addToCart, removeFromCart, decrementQuantity } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-20 backdrop-blur-md">
      <div className="bg-white rounded-lg shadow-xl w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-green-700 font-bold text-lg hover:text-green-900"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
          Your Cart
        </h2>

        {items.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <Cart
            items={items}
            onAdd={addToCart}
            onRemove={removeFromCart}
            onDecrement={decrementQuantity}
          />
        )}
      </div>
    </div>
  );
};

export default CartModal;
