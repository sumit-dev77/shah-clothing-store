import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

 const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCart = [...cart];
    updatedCart[index].quantity = newQuantity;

    setCart(updatedCart);
  };
  const removeFromCart = (index)=>{
    const updatedCart= cart.filter((_,i)=>i !==index)
    setCart(updatedCart)
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity , removeFromCart }}>

      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;