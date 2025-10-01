"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import CareerBG from "@/app/assets/CareerBG.jpg";
import Link from "next/link";

export default function GrowTogether() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const imgWidth = useTransform(scrollYProgress, [0, 0.5], ["100%", "50%"]);
    const imgHeight = useTransform(scrollYProgress, [0, 0.5], ["100vh", "60vh"]);
    const contentOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);
    const contentY = useTransform(scrollYProgress, [0.5, 0.6], [600, 0]);
    const textY = useTransform(scrollYProgress, [0.5, 0.7], [200, 0]);
    const buttonY = useTransform(scrollYProgress, [0.6, 0.8], [400, 0]);

    return (
        <section ref={sectionRef} className="relative w-full min-h-[200vh] bg-[#003F6B]">
            <div className="sticky top-0 flex items-center justify-center h-screen overflow-hidden">
                <motion.div style={{ width: imgWidth, height: imgHeight }} className="relative flex-shrink-0 overflow-hidden rounded-4xl">
                    <Image src={CareerBG} alt="Grow Together Background" fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/50" />
                    <motion.div style={{ opacity: contentOpacity, y: textY }} className="absolute bottom-1 font-rock-salt text-xl flex flex-col justify-center items-center w-5/6 px-5 text-white text-center">
                        <p>Join Us</p>
                    </motion.div>
                </motion.div>

                <motion.div style={{ opacity: contentOpacity, y: contentY }} className="relative font-nico-moji hidden md:flex flex-col justify-center items-start w-1/2 px-10 text-[#D2BFA4]">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                        Grow Together
                    </h2>
                    <p className="text-lg md:text-2xl max-w-xl leading-relaxed">
                        At MAI, we believe in the power of collaboration and
                        continuous growth. Join us to be part of a team that
                        values innovation, learning, and mutual success.
                    </p>
                    <motion.div style={{ opacity: contentOpacity, y: buttonY }} className="cursor-pointer absolute -bottom-20 flex justify-center items-center w-full">
                        <Link href={"/careers"} className="px-6 py-3 bg-[#D2BFA4] text-black font-semibold rounded-full hover:bg-[#bfa88f] transition">
                            Explore Careers
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}