"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Banner from "@/app/assets/landing/Banner.avif";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 1,
      ease: "easeOut",
    },
  }),
};

export default function ParallaxLanding() {
  const ref = useRef(null);
  const nextSectionRef = useRef(null);

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const parallaxX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const parallaxY = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const scrollToNextSection = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        className="relative w-full h-screen overflow-hidden font-urbanist bg-black text-white"
      >
        {/* Background Image */}
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <Image
            src={Banner}
            alt="Creative Banner"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col justify-center items-start h-full px-10 mx-auto space-y-6">
          <motion.h1
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
          >
            Crafting Imagination<br />
            Into Digital Reality
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-2xl text-gray-200 max-w-2xl"
          >
            At MAI, we don’t just build software—we design experiences.
            From delightful UI to scalable solutions, our team is all about
            creativity that performs.
          </motion.p>

          <motion.button
            custom={3}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mt-6 px-6 py-3 text-lg bg-white text-black rounded-full hover:scale-105 transition-all duration-300"
          >
            Let’s Build Together 🚀
          </motion.button>
        </div>

        {/* Scroll to next section button */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
          <button
            onClick={scrollToNextSection}
            className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center animate-bounce"
          >
            ↓
          </button>
        </div>
      </motion.div>
    </>
  );
}
