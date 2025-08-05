"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { SectionHeader } from "@/sections/SectionHeader";
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, PauseIcon } from "@heroicons/react/24/outline";
import data from "@/data/data.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const VideoTestimonial = () => {
  const { videos } = data;

  const [playingIndex, setPlayingIndex] = useState(null);

  const getYouTubeVideoId = (url) => {
    const regex = /\/shorts\/([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const handleTogglePlay = (index) => {
    setPlayingIndex(prev => (prev === index ? null : index));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    swipe: true,
    draggable: true,
    responsive: [
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <section className="py-section-lg max-w-screen-xl mx-auto px-4 relative">
      <SectionHeader
        heading="Thousands of Lives Changed — Yours Could Be Next"
        subheading="Join thousands of happy students and migrants who successfully moved to Australia with our expert guidance."
      />

      <div className="pt-section-md relative">
        <Slider {...settings}>
          {videos.map((url, idx) => {
            const videoId = getYouTubeVideoId(url);
            if (!videoId) return null;

            return (
              <div key={idx} className="px-2">
                <div className="aspect-[9/16] relative rounded-xl overflow-hidden shadow-[0_20px_30px_-10px_rgba(0,0,0,0.3)] bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=1&rel=0&modestbranding=1`}
                    allowFullScreen
                    className="w-full h-full absolute top-0 left-0"
                  />

                  {/* Overlay */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent px-4 py-6 flex items-center justify-between">
                    <div className="text-white text-left max-w-[70%]">
                      <h4 className="text-sm font-semibold leading-snug">
                        Video Title {idx + 1}
                      </h4>
                      <p className="text-xs text-white/80 line-clamp-2">
                        Brief description of the video goes here.
                      </p>
                    </div>

                    <button
                      onClick={() => handleTogglePlay(idx)}
                      aria-label={playingIndex === idx ? "Pause video" : "Play video"}
                      className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-white/10 transition"
                    >
                      {playingIndex === idx ? (
                        <PauseIcon className="w-5 h-5" />
                      ) : (
                        <PlayIcon className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};
