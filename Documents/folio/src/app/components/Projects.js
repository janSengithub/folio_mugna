"use client";
import { useState } from "react";

const slides = [
  {
    src: "/img/achievements/awardwinning.jpg",
    title: "Short Competition",
    description:
      "My second time joining a short film competition and held as champion and bagged several minor awards.",
  },
  {
    src: "/img/achievements/iset.jpg",
    title: "ISITE",
    description: "Success is best when it is shared by the team.",
  },
  {
    src: "/img/achievements/Researchlympics.jpg",
    title: "Researchlympics",
    description: "Awarded as 3rd in a University-wide competition.",
  },
  {
    src: "/img/achievements/MEVAW.jpg",
    title: "Advocacy",
    description: "Held as the champion.",
  },
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-center items-center h-screen md:h-[600px] lg:h-[800px] overflow-visible rounded-lg mx-auto">
      <div className="relative max-w-lg md:max-w-md lg:max-w-lg text-gray-700">
        <img
          src={slides[currentIndex].src}
          alt="Slider Image"
          className="w-full h-full object-cover rounded-lg transition-opacity duration-300"
        />
      </div>
      <div className="relative max-w-lg md:max-w-md lg:max-w-lg text-gray-700 md:ml-16">
        <h1 className="w-[250px] text-start text-[#727d73] lg:text-[80px] font-extrabold font-['Inter'] italic">
          {slides[currentIndex].title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed">{slides[currentIndex].description}</p>
        <p className="mt-2 text-gray-500 font-semibold text-end">— Author</p>
        <div className="flex justify-end mt-4">
          <button
            onClick={prevSlide}
            className="px-4 py-2 bg-[#727d73] text-white rounded-lg mr-2 hover:bg-[#AAB99A]"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="px-4 py-2 bg-[#727d73] text-white rounded-lg hover:bg-[#AAB99A]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
