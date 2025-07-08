import React, { useEffect } from "react";
import NavBar from "./NavBar";
import bg from "../assets/bg.webp";
import achar from "../assets/acharr.png";
import { motion, useAnimation } from "framer-motion"; // For animations
import { useInView } from "react-intersection-observer"; // For scroll-based animations

const HeroSection = () => {
  // Animation controls for scroll-triggered effects
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section
      className="relative min-h-screen "
      aria-label="Thaha Ko Achar Hero Section"
    >
      {/* Background with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={bg}
          alt="Scenic Thaha landscape background"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-[#1F2A4480]" />{" "}
      </div>

      {/* Navbar */}
      <NavBar />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col-reverse md:flex-row justify-center items-center p-4 md:p-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={textVariants}
          className="h-auto w-full md:w-1/2 order-1 md:order-0 flex flex-col items-center md:items-end text-center md:text-right p-4"
        >
          <h1 className="font-[Charm] text-5xl md:text-8xl font-bold text-[#F5F6F5] drop-shadow-[0_2px_4px_rgba(251,192,45,0.5)]">
            Savor the Spice of Thaha
          </h1>
          <p className="font-[Poppins] text-lg md:text-xl text-[#F5F6F5] mt-4 max-w-md tracking-wide">
            Handcrafted pickles from the heart of Thaha, Nepal
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-[#D32F2F] text-white text-2xl tracking-wider px-6 py-3 rounded-4xl font-[Poppins] cursor-pointer hover:bg-[#26773c] transition-colors"
          >
            Shop Now
          </motion.button>
        </motion.div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={imageVariants}
          className="h-auto w-full md:w-1/2 order-2 md:order-0 flex justify-center md:justify-start"
        >
          <motion.img
            src={achar}
            alt="Traditional Thaha Ko Achar jar"
            className="w-[80vw] md:w-[38vw] ml-6 md:ml-2 object-contain cursor-pointer "
            loading="lazy"
            whileHover={{
              scale: 1.08, //
              transition: {
                duration: 0.3, // Animation duration
                ease: "easeOut", // Smooth easing
              },
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
