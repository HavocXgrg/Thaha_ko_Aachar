import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.svg";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { BsCart4 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useCart } from "../Contexts/CartContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount(); //method defined in App.jsx is stored in the variable for an ease use

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Shop All", to: "#" },
    { name: "About", to: "#" },
    { name: "Contact", to: "#" },
  ];

  return (
    <>
      {/* Main Navigation Bar */}
      <motion.div
        className={` fixed top-8 md:h-[12vh] h-[8vh] z-50 w-[90%] sm:w-[80%] md:w-[72%] left-1/2 transform -translate-x-1/2 flex items-center justify-between bg-white/90  backdrop-blur-3xl rounded-full px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300 
          
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Desktop Menu Items (Left) */}
        <div className="hidden lg:flex items-center gap-6 ml-14">
          {navItems.slice(0, 2).map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="text-[#085e2b] hover:text-[#D32F2F] text-xl tracking-wider font-medium transition-colors cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden text-xl cursor-pointer z-50"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <RxCross2 size={24} /> : <CiMenuBurger size={24} />}
        </div>

        {/* Logo */}
        <motion.img
          className="h-22 md:h-32 w-auto cursor-pointer md:ml-18 ml-14"
          src={logo}
          alt="brand-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        />

        {/* Desktop Menu Items (Right) */}
        <div className="hidden lg:flex items-center gap-12">
          {navItems.slice(2).map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className=" text-[#085e2b] hover:text-[#D32F2F] text-xl tracking-wider font-medium transition-colors cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
          <div className="w-26 gap-8 text-green-900 h-12  cursor-pointer flex items-center justify-center">
            <Link to="/cart" className="relative">
              <BsCart4 className="text-3xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-4 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                  {cartCount}
                </span>
              )}
            </Link>
            <CgProfile className="text-3xl" />
          </div>
        </div>

        {/* Mobile Cart & profile Icon */}
        <div className="lg:hidden w-26 h-14  gap-8 flex items-center justify-center cursor-pointer text-green-900 ">
          <Link to="/cart" className="relative">
            <BsCart4 className="text-3xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-4 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                {cartCount}
              </span>
            )}
          </Link>
          <CgProfile className="text-3xl" />
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 lg:hidden pt-24"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-8 py-6">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className="text-2xl font-medium text-[#1F2A44] hover:text-[#D32F2F] transition-colors cursor-pointer"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
