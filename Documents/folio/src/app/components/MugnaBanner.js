"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MugNaBanner() {
  const words = ["JANSEN C. SOLAYAO", "Front-end Developer", "UI/UX Designer", "Freelancer", "Programmer", "Photographer"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // Speed of typing
  const deletingSpeed = 50; // Speed of deleting

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting && charIndex < currentWord.length) {
      // Typing effect
      setTimeout(() => {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting effect
      setTimeout(() => {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (!isDeleting && charIndex === currentWord.length) {
      // Pause after typing before deleting
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && charIndex === 0) {
      // Move to the next word after deleting
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className="relative h-[45vh] md:h-[50vh] lg:h-[60vh] w-full overflow-hidden">
      <Image
        src="/img/mug-na.jpg"
        alt="Mug Na"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center font-helvetica text-[#55885a] font-bold">
        {/* Main Title */}
        <h1 className="font-helvetica lg:text-9xl md:text-8xl sm:text-7xl text-center drop-shadow-lg">
          [mug. nâ.]
        </h1>

        {/* Typing Effect */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0, ease: "easeOut" }}
          className="lg:text-2xl md:text-xl sm:text-sm mt-4 text-amber-50 bg-[#727D73] px-4 py-2"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {text}
          <span className="animate-blink">|</span>
        </motion.p>
      </div>
    </div>
  );
}
