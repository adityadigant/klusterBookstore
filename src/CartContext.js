import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    // Check if the book is already in the cart
    const existingItem = cart.find((item) => item.id === book.id);

    if (existingItem) {
      // If the book is already in the cart, increase the quantity
      const updatedCart = cart.map((item) =>
        item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the book is not in the cart, add it with a quantity of 1
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  const removeFromCart = (bookId) => {
    const updatedCart = cart.filter((item) => item.id !== bookId);
    setCart(updatedCart);
  };

  const updateQuantity = (bookId, newQuantity) => {
    if(newQuantity==0){
        removeFromCart(bookId)
    }else{
        const updatedCart = cart.map((item) =>
        item.id === bookId ? { ...item, quantity: newQuantity } : item
      );
      setCart(updatedCart);
    }
   
   
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
