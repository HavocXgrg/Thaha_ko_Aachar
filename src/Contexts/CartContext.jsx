import { createContext, useContext } from "react";

export const CartContext = createContext({
  //creating context with default values i.e. object with array and methods in it
  cart: [],
  addToCart: () => {},
  getCartCount: () => 0,
});

export const useCart = () => useContext(CartContext); //custom hook that wraps our contexts.

export const CartProvider = CartContext.Provider;
