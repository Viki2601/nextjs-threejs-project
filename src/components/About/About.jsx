"use client";
import Founder from "@/app/assets/landing/GMSFounder.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="px-8 py-4 text-white bg-black/30 backdrop-blur-lg font-urbanist w-full h-screen space-y-8 flex flex-col justify-center items-center">
                <h1 className="font-bold text-5xl">About MAI</h1>
                <h2 className="text-start font-semibold text-2xl">Bringing The Whole Space Together</h2>
                <ul className="w-full lg:w-4/5 text-md font-light space-y-2">
                    <li>
                        <span className="font-semibold text-lg">MAI transforms your house into a home</span> by taking care of all your projects, from simple to difficult ones, including painting, furnishing, bathroom upscaling, kitchen remodeling, stone worktop installations, and much more.
                    </li>
                    <li>With MAI, locating an expert in the industry you can rely on is no more challenging. Our advanced Artificial Intelligence helps you select the right fit for your project with confidence.</li>
                    <li>MAI enables potential individuals and companies to connect with a large network of thirsty project owners.</li>
                    <li>We have helped thousands of individuals to pursue their professional aspirations, start their own enterprises from scratch.</li>
                    <li>
                        Numerous traders say - <span className="font-semibold text-lg">MAI has not just given me financial and professional freedom but has also made me fall in love with my work life.</span>
                    </li>
                </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="text-white font-urbanist flex md:flex-row flex-col items-center">
                <Image src={Founder} alt="GMS" width={1000} height={1000} className="object-cover" />
                <div className="w-full lg:w-1/2 mx-5 p-5 bg-black/30 backdrop-blur-lg md:rounded-2xl space-y-5">
                    <h2 className="text-3xl">About the Founder</h2>
                    <p>
                        Our founder, G.M.S, stands out as the first generation to successfully establish a network with experts throughout the UK in this period of generational hierarchy. With his ground research in the field for more than a decade, he has endeavored persistently, overcoming tons of challenges to make this website a reality from concept. He visioned a dream that is alive today and helps millions fulfill theirs.
                    </p>
                    <p className="text-lg font-semibold">Check him out on LinkedIn</p>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="px-8 py-1 bg-white text-md text-[#003F6B] rounded-lg">
                        Connect
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}