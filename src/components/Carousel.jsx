import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { easeIn, motion } from "framer-motion";

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // Mobile devices (below 768px)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false, // Hide arrows on mobile for cleaner look
        },
      },
      {
        breakpoint: 640, // Smaller mobile devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="flex flex-col items-center gap-4 w-full min-h-[60vh] p-4 md:p-8 bg-[#9fc0d0]  overflow-hidden">
      <h1 className="mt-4 md:mb-6">
        <span className="italic tracking-wide font-[charm] text-3xl md:text-5xl  font-black]">
          Discover
        </span>{" "}
        <span className="text-green-900 font-bold md:text-6xl text-4xl font-[charm]">
          Top Picks
        </span>
      </h1>
      <Slider {...settings} className="w-full max-w-7xl mt-6 ">
        {images.map((image, index) => (
          <div
            key={index}
            className="px-2 sm:px-3 md:px-4  flex justify-center items-center"
          >
            <motion.div
              className="bg-[#d3f5ff] rounded-lg  overflow-hidden "
              whileHover={{ scale: 1.06 }}
            >
              <motion.img
                src={image.image}
                alt={image.title}
                className="w-full h-48 sm:h-56 md:h-76 object-contain "
              />
              <h2 className="text-lg  md:text-2xl md:font-extrabold font-medium font-serif tracking-wide text-green-800 text-center rounded-t-full bg-amber-200">
                {image.title}
              </h2>
            </motion.div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
