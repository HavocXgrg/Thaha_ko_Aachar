import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../Contexts/CartContext";
import { Bounce, toast } from "react-toastify";

const Cart = () => {
  const { cart, deleteFromCart, updateQuantity } = useCart();
  const [editingItemId, setEditingItemId] = useState(null); // Track which item is being edited

  const toggleEdit = (itemId) => {
    setEditingItemId((prev) => (prev === itemId ? null : itemId)); // Toggle edit mode
  };

  return (
    <section className="bg-[#7a9de0] min-h-[100vh] p-4 md:p-6">
      <div className="max-w-4xl mx-auto mt-32">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
          Your Cart
        </h1>
        {cart.length === 0 ? (
          <p className="text-red-900 text-4xl font-bold tracking-wider">
            Unfortunatley!! The Cart is empty.
          </p>
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
                whileHover={{ scale: 1.03 }}
              >
                <img src={item.image} alt={item.title} className="h-40 mb-2" />
                <h3 className="text-xl font-bold text-green-900">
                  {item.title}
                </h3>
                <p className="text-sm text-green-900">{item.description}</p>
                <p className="font-semibold text-green-900">Rs {item.price}</p>

                {/* Quantity update state codes */}
                {editingItemId === item.id ? (
                  <div className="flex items-center gap-2 mt-2 ">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 bg-gray-200 rounded-l text-green-900 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-100 text-green-900 font-bold">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1  bg-gray-200 rounded-r text-green-900 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <p className="text-green-900 mt-1 text-md md:text-xl">
                    Quantity: <span className="font-bold">{item.quantity}</span>
                  </p>
                )}

                <p className="mt-2 text-xl text-green-900">
                  Total Amount:{" "}
                  <span className="font-bold">
                    Rs {item.quantity * item.price}
                  </span>
                </p>

                <div className="btn flex gap-6 mt-4">
                  {/* Delete Button */}
                  <motion.button
                    className="bg-red-600 p-2 rounded-md px-4 text-white cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => {
                      deleteFromCart(item.id);
                      toast.error("Product removed from cart!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce,
                      });
                    }}
                  >
                    Delete
                  </motion.button>

                  {/* update button */}
                  <motion.button
                    className={
                      editingItemId === item.id
                        ? "bg-green-600  rounded-md p-2 px-4 text-white cursor-pointer"
                        : "bg-blue-500  rounded-md p-2 px-4 text-white cursor-pointer"
                    }
                    onClick={() => {
                      if (editingItemId === item.id) {
                        toast.info("Update successful!", {
                          position: "top-right",
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: false,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "dark",
                          transition: Bounce,
                        });
                      }
                      toggleEdit(item.id);
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {editingItemId === item.id ? "Done" : "Update"}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        <Link to="/" className="mt-8 inline-block text-white">
          <button className="p-2 px-5 bg-red-800 text-xl rounded-full cursor-pointer hover:bg-green-800 transition-colors">
            Back to Shop
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Cart;
