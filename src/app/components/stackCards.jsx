'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Banner from "@/app/assets/landing/Banner.avif"

const SuccessStories = () => {
  return (
    <section className="bg-[#F7F5F2] min-h-screen flex items-center w-full font-urbanist">
      <div className="w-full grid md:grid-cols-2 gap-10 items-center px-10">
        <div>
          <h1 className="text-9xl font-bold leading-tight text-black tracking-tighter">
            Partner in success stories
          </h1>
          <button className="mt-6 bg-[#E7DCC9] text-black py-3 px-6 rounded-full text-lg font-medium">
            See our work
          </button>
        </div>
        <motion.div 
          className="flex flex-col gap-4 relative h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div whileHover={{y:-30}} className="bg-[#F2C94C] p-4 rounded-2xl shadow-xl absolute top-0 w-full flex space-x-5">
            <Image src={Banner} alt="Mr Marvis" width={300} height={200} className="rounded-xl" />
            <h3 className="text-4xl font-bold text-[#13293D] mt-3">Mr Marvis</h3>
          </motion.div>
          <motion.div whileHover={{y:-30}} className="bg-[#14213D] p-4 rounded-2xl shadow-lg absolute top-32 w-full flex space-x-5">
            <Image src={Banner} alt="Patta" width={300} height={200} className="rounded-xl" />
            <h3 className="text-4xl font-bold text-white mt-3">Patta</h3>
          </motion.div>
          <motion.div whileHover={{y:-30}} className="bg-white p-4 rounded-2xl shadow-lg absolute top-64 w-full flex space-x-5">
            <Image src={Banner} alt="Tony's Chocolonely" width={300} height={200} className="rounded-xl" />
            <h3 className="text-4xl font-bold text-[#0056D2] mt-3">Tony's Chocolonely</h3>
          </motion.div>
        </motion.div>
      </div>
      <motion.button 
        className="fixed bottom-10 left-10 bg-red-600 text-white flex items-center gap-2 px-6 py-3 rounded-full shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xl">☰</span> Menu
      </motion.button>
    </section>
  );
};

export default SuccessStories;
