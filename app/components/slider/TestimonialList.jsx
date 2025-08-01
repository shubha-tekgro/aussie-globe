'use client';

import Slider from "react-slick";
import { Testimonial } from "./Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    profileImage: "/images/testimonial/img1.jpg",
    reviewText: "This is the best course for IELTS! Highly Recommended.",
    userName: "Vincent Luggerius",
    userRole: "Student",
    rating: 5,
  },
  {
    profileImage: "/images/testimonial/img2.jpg",
    reviewText: "The instructor really understands the test strategy.",
    userName: "Aria Lane",
    userRole: "Graduate",
    rating: 4,
  },
  {
    profileImage: "/images/testimonial/img3.jpg",
    reviewText: "Scored Band 8.5 thanks to this course.",
    userName: "John Felix",
    userRole: "Candidate",
    rating: 5,
  },
  {
    profileImage: "/images/testimonial/img4.jpg",
    reviewText: "Very easy to follow and well structured.",
    userName: "Maria Gomez",
    userRole: "Professional",
    rating: 5,
  },
];

export const TestimonialList = () => {
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
