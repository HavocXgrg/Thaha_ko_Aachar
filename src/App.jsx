import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import Carousel from "./components/Carousel";
import { TopProduct, Product } from "./Constant/Data";
import Footer from "./components/Footer";
import { CartProvider } from "./Contexts/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import { Bounce, ToastContainer, toast } from "react-toastify";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const deleteFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId)); //filter gives new array keeping only unmatched id items.
  };
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      deleteFromCart(itemId);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart && storedCart.length > 0) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartProvider
      value={{ cart, addToCart, getCartCount, deleteFromCart, updateQuantity }}
    >
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <Carousel images={TopProduct} />
                  <Products data={Product} />
                </>
              }
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
