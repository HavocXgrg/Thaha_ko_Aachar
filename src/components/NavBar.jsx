import React from "react";
import { motion } from "motion/react";
import logo from "../assets/logo.svg";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  return (
    <motion.div className="relative flex items-center justify-center max-w-[90%] sm:max-w-[80%] md:max-w-[72%] max-h-[58px] sm:max-h-[78px] bg-white rounded-full  mx-auto top-8 ">
      <motion.div className=" flex items-center justify-around w-full h-full  ">
        <motion.div className="left-items">
          {/* Hamburger menu toggles for mobile-devices */}
          <motion.div className=" lg:hidden text-xl ">
            <CiMenuBurger />
          </motion.div>
          <div></div>
        </motion.div>

        <motion.img
          className=" h-auto max-w-22 sm:max-w-34 mt-1 ml-12 cursor-pointer "
          src={logo}
          alt="brand-logo"
        />
        <div className="item2 w-20 h-5 bg-yellow-400"></div>
      </motion.div>
    </motion.div>
  );
};

export default NavBar;
