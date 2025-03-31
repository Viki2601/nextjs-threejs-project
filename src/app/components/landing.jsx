"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Banner from "@/app/assets/landing/Banner.avif";

export default function ParallaxLanding() {
  const ref = useRef(null);


  return (
    <motion.div ref={ref} className="relative w-full h-screen overflow-hidden font-urbanist">
      <motion.div  className="absolute inset-0 w-full h-full">
        <Image src={Banner} alt="Banner" layout="fill" objectFit="cover" priority/>
      </motion.div>

      {/* Content */}
      <div className="relative flex flex-col justify-center h-full bg-black/50 px-10 text-white space-y-5">
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl lg:text-6xl font-bold">
          Welcome to MAI
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }} className="text-sm md:text-xl w-full lg:w-[60%]">
          MAI Corporation serves as a platform connecting homeowners with construction-related service providers, offering tailored solutions to address construction challenges.
        </motion.p>

        <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 1 }} className="text-sm md:text-xl w-full lg:w-[60%]">
          Our project also aligns with the Britain’s Prime Minister’s net zero emissions by helping property owners and traders list left-over construction materials on our platform, reducing carbon foot-prints and maximising value.
        </motion.p>
      </div>
    </motion.div>
  );
}
