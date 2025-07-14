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

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevItem) => {
      const existingItem = prevItem.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItem.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItem, { ...item, quantity: 1 }];
    });
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
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
    <CartProvider value={{ cart, addToCart, getCartCount }}>
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
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
