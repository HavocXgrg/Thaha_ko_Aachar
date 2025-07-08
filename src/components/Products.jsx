import React from "react";
import { motion } from "framer-motion";
import { BsCart4 } from "react-icons/bs";

const Products = ({ data }) => {
  return (
    <section className="bg-[#f8e08e] min-h-[100vh] ">
      <div className="min-h-[100vh] p-1 md:p-6 bg-[#f8e08e] rounded-t-3xl ">
        <div className="min-h-full flex justify-between md:justify-around mt-12 mb-4">
          <h1 className="font-bold flex md:gap-4 font-[charm] ">
            <span className="text-3xl md:text-5xl">Our</span>{" "}
            <span className="text-3xl md:text-5xl text-green-900">Product</span>
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className=" bg-[#ea2323] text-white text-sm  tracking-wider p-3 rounded-4xl font-[Poppins] cursor-pointer hover:bg-[#26773c] transition-colors"
          >
            All Product &rarr;
          </motion.button>
        </div>

        <motion.div className="bg-[#69ac7b] h-full p-4 md:gap-6 gap-4 md:p-18 rounded-t-[4rem]  md:rounded-t-[10rem] rounded-b-4xl md:rounded-b-[8rem] grid grid-cols-2 md:grid-cols-4    ">
          {data.map(({ id, image, title, description, price }) => {
            return (
              <motion.div
                className="card-box  flex flex-col items-center rounded-2xl bg-gray-300 h-[42vh] md:h-[60vh]  "
                key={id}
              >
                <motion.div className="image ">
                  <img
                    src={image}
                    alt={title}
                    className=" md:h-[42vh] h-[26vh]  "
                  />
                </motion.div>
                <motion.div className="description text-center">
                  <h1 className="md:text-3xl text-xl font-[mooxy] tracking-wide md:tracking-widest text-green-900 font-bold">
                    {title}{" "}
                  </h1>
                  <span className="text-green-900 text-sm md:text-lg ">
                    Rs {price}{" "}
                  </span>
                </motion.div>
                <motion.button
                  className="bg-red-800 flex gap-3 md:gap-4 text-white md:p-2 md:px-8 p-2 px-2 mt-2 rounded-full cursor-pointer "
                  whileHover={{ scale: 1.05 }}
                >
                  <BsCart4 className="text-xl text-green-100" /> Add to Cart
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
