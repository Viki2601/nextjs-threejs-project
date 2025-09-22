'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Banner from "@/app/assets/landing/Banner.avif";
import Worktops from "@/app/assets/landing/Worktops.png";
import Myproject from "@/app/assets/landing/Myproject.png";

const SuccessStories = () => {
  return (
    <section className="bg-[#F7F5F2] min-h-screen flex items-center w-full font-urbanist py-16 px-4 sm:px-6 lg:px-10">
      <div className="w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black tracking-tighter">
            Success stories
          </h1>
          <button className="mt-6 bg-[#E7DCC9] text-black py-3 px-6 rounded-full text-base sm:text-lg font-medium">
            See our work
          </button>
        </div>

        {/* Image Cards */}
        <motion.div 
          className="relative flex flex-col md:gap-4 gap-6 md:h-[500px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Mobile Stack */}
          <div className="flex flex-col gap-6 md:hidden">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#035140] p-4 rounded-2xl shadow-xl flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5"
            >
              <Image src={Worktops} alt="Mr Marvis" width={300} height={200} className="rounded-xl object-cover" />
              <h3 className="text-2xl sm:text-3xl font-bold text-[#13293D] mt-2">Work-Tops.com</h3>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#003F6B] p-4 rounded-2xl shadow-xl flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5"
            >
              <Image src={Myproject} alt="Patta" width={300} height={200} className="rounded-xl object-cover" />
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">Myproject.ai</h3>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-4 rounded-2xl shadow-xl flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5"
            >
              <Image src={Banner} alt="Tony's Chocolonely" width={300} height={200} className="rounded-xl object-cover" />
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0056D2] mt-2">Dragon Customer</h3>
            </motion.div>
          </div>

          {/* Desktop Absolute Stack */}
          <div className="hidden md:block relative h-full">
            <motion.div 
              whileHover={{ y: -30 }}
              className="bg-[#035140] p-4 rounded-2xl shadow-xl absolute top-0 w-full flex space-x-5"
            >
              <Image src={Banner} alt="Mr Marvis" width={300} height={200} className="rounded-xl object-cover" />
              <h3 className="text-3xl font-bold text-white mt-3">Work-Tops.com</h3>
            </motion.div>
            <motion.div 
              whileHover={{ y: -30 }}
              className="bg-[#003F6B] p-4 rounded-2xl shadow-xl absolute top-44 w-full flex space-x-5"
            >
              <Image src={Banner} alt="Patta" width={300} height={200} className="rounded-xl object-cover" />
              <h3 className="text-3xl font-bold text-white mt-3">Myproject.ai</h3>
            </motion.div>
            <motion.div 
              whileHover={{ y: -30 }}
              className="bg-white p-4 rounded-2xl shadow-xl absolute top-[22rem] w-full flex space-x-5"
            >
              <Image src={Banner} alt="Tony's Chocolonely" width={300} height={200} className="rounded-xl object-cover" />
              <h3 className="text-3xl font-bold text-[#0056D2] mt-3">Dragon Customer</h3>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
