import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <section className="flex flex-col items-center gap-4 w-full min-h-[60vh] p-4 md:p-8 bg-[#9fc0d0] overflow-hidden">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-[charm] tracking-wider  text-gray-700">
        Top Picks
      </h1>
      <Slider {...settings} className="w-full max-w-7xl mt-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="px-2 sm:px-3 md:px-4  flex justify-center items-center"
          >
            <div className="bg-[#d3f5ff] rounded-lg  overflow-hidden ">
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-48 sm:h-56 md:h-76 object-contain "
              />
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold font-[charm] tracking-wide text-gray-700 text-center">
                {image.title}
              </h2>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
