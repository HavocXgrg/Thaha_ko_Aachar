import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../Contexts/CartContext";
import NavBar from "./NavBar";

const Cart = () => {
  const { cart } = useCart();
  return (
    <section className="bg-[#f8e08e] min-h-[100vh] p-4 md:p-6 ">
      <div className="max-w-4xl mx-auto mt-32">
        <h1 className="text-2xl font-bold text-green-900 mb-4">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-green-900">Your cart is empty.</p>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {cart.map((item) => (
              <motion.div
                key={item.id}
                className="flex flex-col items-center rounded-2xl bg-gray-300 p-4"
                whileHover={{ scale: 1.05 }}
              >
                <img src={item.image} alt={item.title} className="h-40 mb-2" />
                <h3 className="text-xl font-bold text-green-900">
                  {item.title}
                </h3>
                <p className="text-sm text-green-900">{item.description}</p>
                <p className="font-semibold text-green-900">Rs {item.price}</p>
                <p className="text-green-900">Quantity: {item.quantity}</p>
              </motion.div>
            ))}
          </motion.div>
        )}
        <Link
          to="/"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Back to Shop
        </Link>
      </div>
    </section>
  );
};

export default Cart;
