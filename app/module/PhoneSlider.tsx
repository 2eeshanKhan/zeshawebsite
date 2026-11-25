
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const screenshots = [
  "/101.webp",
  "/102.webp",
  "/103.webp",
  "/104.webp",
];

export default function PhoneSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto flex w-full max-w-[390px] flex-col items-center py-6">

      {/* Background Glow */}
      <div className="absolute inset-10 rounded-full bg-[#F76B45]/25 blur-[75px]" />

      {/* Phone Frame */}
      <div className="relative z-10 w-[265px] overflow-hidden rounded-[42px] border-[8px] border-[#292321] bg-[#292321] shadow-[0_30px_70px_rgba(80,35,25,0.28)] sm:w-[285px]">

        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-2 z-30 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />

        {/* Screenshot */}
        <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[32px] bg-white">

          {screenshots.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                activeIndex === index
                  ? "translate-x-0 opacity-100"
                  : index < activeIndex
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
              }`}
            >
              <Image
                src={src}
                alt={`ZESHA app screen ${index + 1}`}
                fill
                priority={index === 0}
                sizes="285px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Previous Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous screenshot"
        className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white text-xl text-[#F76B45] shadow-lg transition hover:scale-110 sm:left-[-5px]"
      >
        ‹
      </button>

      {/* Floating Next Button */}
      <button
        onClick={nextSlide}
        aria-label="Next screenshot"
        className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white bg-white text-xl text-[#F76B45] shadow-lg transition hover:scale-110 sm:right-[-5px]"
      >
        ›
      </button>

      {/* Slider Dots */}
      <div className="relative z-20 mt-7 flex items-center justify-center gap-2">
        {screenshots.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to screenshot ${index + 1}`}
            aria-current={activeIndex === index}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-8 bg-[#F76B45]"
                : "w-2 bg-[#e9b8aa] hover:bg-[#F76B45]"
            }`}
          />
        ))}
      </div>

      <p className="relative z-10 mt-3 text-xs font-medium text-[#92776e]">
        Explore the ZESHA experience · {activeIndex + 1}/4
      </p>
    </div>
  );
}
