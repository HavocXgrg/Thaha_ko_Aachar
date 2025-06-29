import React from "react";
import { motion } from "motion/react";
import logo from "../assets/logo.svg";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
  return (
    <div className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[72%] max-h-[58px] sm:max-h-[78px] bg-white rounded-full mt-6 md:mt-10 mx-auto relative flex items-center justify-center">
      <div className=" flex items-center justify-around w-full ">
        <div className="left-items">
          {/* Hamburger menu toggles for mobile-devices */}
          <motion.div className=" lg:hidden">
            <CiMenuBurger />
          </motion.div>
          <div></div>
        </div>

        <img
          className="  max-w-22 sm:max-w-34 mt-1 ml-2 cursor-pointer overflow-hidden"
          src={logo}
          alt=""
        />

        <div className="item2 w-20 h-5 bg-yellow-400"></div>
      </div>
    </div>
  );
};

export default NavBar;
