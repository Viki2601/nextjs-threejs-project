'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import GMS from "@/app/assets/landing/GMS.jpg";
import { useRef } from "react";

export default function DetailedView() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y1 = useTransform(scrollYProgress, [0, 0.33], ["0%", "-100%"]);
  const y2 = useTransform(scrollYProgress, [0.33, 0.66], ["0%", "-100%"]);

  return (
    <div ref={containerRef} className="relative w-full min-h-[300vh] font-urbanist">
      {/* Section 1 */}
      <div className="sticky top-0 h-screen w-full grid grid-cols-1 lg:grid-cols-2">
        <motion.div 
          style={{ y: y1 }}
          className="h-full flex items-center justify-center p-6 sm:p-10 bg-white rounded-b-2xl"
        >
          <div className="w-full max-w-2xl bg-[#003F6B] p-6 sm:p-8 text-white text-center flex flex-col items-center justify-center h-[60vh] space-y-4 rounded-xl shadow-xl">
            <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white/60 leading-tight">
              "Making Simple Construction Projects"
            </p>
            <p className="text-xl sm:text-2xl font-bold">We Build Homes Everyday</p>
            <p className="text-base sm:text-lg font-semibold">MAI Experts at your service!</p>
          </div>
        </motion.div>

        <div className="h-full flex items-center justify-center p-6 sm:p-10 bg-[#003F6B] rounded-2xl">
          <div className="w-full h-[60vh] sm:h-full relative rounded-xl overflow-hidden shadow-xl">
            <Image
              src={GMS}
              alt="Construction"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="sticky top-0 h-screen w-full grid grid-cols-1 lg:grid-cols-2 mt-[100vh]">
        <motion.div 
          style={{ y: y2 }}
          className="h-full flex items-center justify-center p-6 sm:p-10 bg-white/60 backdrop-blur-2xl rounded-2xl"
        >
          <div className="w-full max-w-2xl bg-[#003F6B] p-6 sm:p-8 text-white text-center flex flex-col items-center justify-center h-[50vh] space-y-4 rounded-xl shadow-xl">
            <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white/60">Vision</p>
            <p className="text-base sm:text-xl font-semibold">
              Creating the easiest, most efficient & reliable technology to serve the Construction Industry.
            </p>
          </div>
        </motion.div>

        <div className="h-full flex items-center justify-center p-6 sm:p-10 bg-white/20 backdrop-blur-2xl rounded-2xl">
          <div className="w-full max-w-2xl bg-[#003F6B] p-6 sm:p-8 text-white text-center flex flex-col items-center justify-center h-[70vh] space-y-4 rounded-xl shadow-xl">
            <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white/60">Mission</p>
            <p className="text-base sm:text-xl font-semibold">
              Growing together with Individual Traders & SMEs through innovative construction solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
