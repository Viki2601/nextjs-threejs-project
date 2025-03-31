'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import SABBG from "@/app/assets/landing/SAB.png";
import BG1 from "@/app/assets/landing/Rectangle1.png";
import BG2 from "@/app/assets/landing/Rectangle2.png";

export default function SAB() {
    return (
        <section className="bg-[#003F6B] w-full min-h-screen p-6 md:p-10 flex flex-col items-center justify-center font-urbanist">
            <div className="relative w-full flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-stretch overflow-hidden">
                {/* Image 1 */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="w-full md:w-80 lg:w-96 h-56 md:h-64 rounded-lg bg-white/10 backdrop-blur-md shadow-lg flex items-center justify-center"
                >
                    <Image src={SABBG} alt="SAB" width={1000} height={1000} className="w-full h-full rounded-lg object-contain" />
                </motion.div>

                {/* Image 2 */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="w-full md:w-80 lg:w-96 h-56 md:h-64 rounded-lg shadow-lg flex items-center justify-center"
                >
                    <Image src={BG1} alt="SABBG1" width={1000} height={1000} className="w-full h-full rounded-lg object-cover" />
                </motion.div>

                {/* Image 3 */}
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="w-full md:w-80 lg:w-96 h-56 md:h-64 rounded-lg shadow-lg flex items-center justify-center"
                >
                    <Image src={BG2} alt="SABBG2" width={1000} height={1000} className="w-full h-full rounded-lg object-cover" />
                </motion.div>

                {/* Text Card */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: false }}
                    className="w-full md:w-80 lg:w-96 h-56 md:h-64 text-white space-y-3 p-5 rounded-lg bg-white/10 backdrop-blur-md shadow-lg flex flex-col justify-center"
                >
                    <h2 className="text-lg md:text-xl font-bold">CORPORATE SOCIAL RESPONSIBILITY</h2>
                    <p className="text-sm md:text-base">
                        MAI initiates a holistic approach to community well-being by extending its
                        “Family Counselling Services” to the general public, fostering mental health
                        and support for families in need through its project SAB.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
