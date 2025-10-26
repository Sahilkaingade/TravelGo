// /src/context/CartContext.jsx
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      if (prevCart.some((i) => i.id === item.id)) return prevCart; // prevent duplicates
      return [...prevCart, item];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
