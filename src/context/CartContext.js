import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };
  const removeFromCart = (itemId) => {
    const index = cartItems.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      const newCartItems = [...cartItems];
      newCartItems.splice(index, 1); // Belirtilen index'teki ürünü kaldır
      setCartItems(newCartItems);
    }
  };
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart ,removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
};