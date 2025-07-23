import React from "react";
import CountUp from "react-countup";
import { stats, cardData, reviewData } from "../Constant/AboutStats";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import VideoComponent from "./VideoComponent";

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768, // Mobile devices (below 768px)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: true, // Hide arrows on mobile for cleaner look
        },
      },
      {
        breakpoint: 640, // Smaller mobile devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
        },
      },
    ],
  };
  return (
    <section className=" min-h-[180vh]  bg-[#f8e08e] ">
      <div className="container-first p-2 md:p-4 md:px-8">
        <h1 className="flex items-center justify-center text-2xl md:text-4xl tracking-wide font-bold text-green-900 mt-12 md:mb-18">
          <u>The Numbers Tell The Story</u>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 mt-6 gap-4 md:px-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-4 items-center">
              <CountUp
                className=" text-3xl md:text-6xl font-bold text-gray-600 "
                end={stat.end}
                duration={stat.duration}
                enableScrollSpy
                scrollSpyOnce
                formattingFn={stat.plus ? (value) => `${value}+` : undefined}
              />
              <span className="text-center text-green-900 tracking-wider font-sm md:font-medium md:leading-9 ">
                {stat.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container-second mt-12 mb-12">
        <h1 className="flex items-center justify-center text-2xl md:text-4xl font-bold text-green-900">
          <u>What Sets Us Apart</u>
        </h1>
        <div className="card mt-4 md:mt-12 md:p-6 p-4 grid grid-cols-2 md:grid-cols-5 gap-6">
          {cardData.map(({ id, title, description, img }) => (
            <motion.div
              key={id}
              className="p-4 md:p-6 border-2 border-green-800 rounded-2xl bg-[#e8e9aa] "
              whileHover={{
                scale: 1.06,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            >
              <img
                src={img}
                alt={title}
                className=" h-16 md:h-32 ml-8 md:ml-12 "
              />
              <h1 className=" flex justify-center text-center  text-md md:text-2xl text-green-900 font-bold mt-2 md:mt-6">
                {title}{" "}
              </h1>
              <p className="mt-2 md:mt-4 text-center text-[0.7rem] md:text-[0.9rem] ">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video component usage */}
      <VideoComponent />

      <div className="container-third mt-14 flex flex-col  items-center ">
        <h1 className=" md:mt-6 font-bold text-2xl md:text-4xl text-green-800">
          What a Customer Had To Say
        </h1>
        <Slider {...settings} className="w-full max-w-7xl mt-6 mb-16 p-2">
          {reviewData.map(
            ({ id, reviewText, customerName, profilePic, date, rating }) => (
              <div key={id} className="px-2  sm:px-3 md:px-4 mt-2 ">
                <motion.div
                  className="bg-[#d9f4fc] h-60 flex flex-col gap-4 p-4 rounded-lg cursor-pointer overflow-hidden "
                  whileHover={{
                    scale: 1.08,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                >
                  <div className="flex gap-2">
                    <motion.img
                      src={profilePic}
                      alt={customerName}
                      className=" h-16 sm:h-56 md:h-20 object-contain rounded-full bg-[#d7d87b] "
                    />
                    <div className="flex flex-col">
                      <h2 className="font-bold text-green-900 ">
                        {customerName}
                      </h2>
                      <p className="text-[0.8rem] text-gray-500">{date}</p>
                      <p className="flex mt-2">
                        {Array.from({ length: rating }, (_, i) => (
                          <FaStar
                            key={i}
                            className="w-4 h-3 text-yellow-600 "
                          />
                        ))}
                      </p>
                    </div>
                  </div>
                  <p className="text-[0.8rem] text-center">{reviewText} </p>
                </motion.div>
              </div>
            )
          )}
        </Slider>
      </div>
    </section>
  );
};

export default About;
