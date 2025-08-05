'use client';

import Slider from "react-slick";
import { Testimonial } from "./Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "@/data/data.json";

export const TestimonialList = () => {
  const { testimonialsData } = data;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    appendArrows: (arrows) => (
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-6 z-10">
        {arrows}
      </div>
    ),
  };

  return (
    <section className="w-full py-10 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {testimonialsData.map((testimonial, idx) => (
            <div key={idx} className="px-3 py-4 flex">
              <div className="flex flex-col h-[8rem] flex-1">
                <Testimonial {...testimonial} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
