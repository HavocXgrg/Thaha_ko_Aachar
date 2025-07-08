import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import Carousel from "./components/Carousel";
import { TopProduct, Product } from "./Constant/Data";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <HeroSection />
      <Carousel images={TopProduct} />{" "}
      {/* img is array of objs passed as a child prop to Carousel component*/}
      <Products data={Product} />
      <Footer />
    </div>
  );
};

export default App;
