'use client';
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import GMS from "@/app/assets/landing/GMS.jpg";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function DetailedView() {
    const MotionBox = ({ children, delay }) => {
        const controls = useAnimation();
        const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

        useEffect(() => {
            if (inView) {
                controls.start({ x: 0, opacity: 1 });
            } else {
                controls.start({ x: 100, opacity: 0 });
            }
        }, [inView, controls]);

        return (
            <motion.div
                ref={ref}
                initial={{ x: 100, opacity: 0 }}
                animate={controls}
                transition={{ duration: 1, delay, ease: "easeOut" }}
                className="w-full bg-[#003F6B] p-5 m-10 text-white text-center h-fit space-y-4 rounded-xl shadow-xl"
            >
                {children}
            </motion.div>
        );
    };

    return (
        <section className="bg-white flex flex-col-reverse lg:flex-row w-full min-h-screen space-y-10 font-urbanist overflow-hidden">
            <div className="lg:w-1/2 z-10">
                <div className="w-full flex justify-start">
                    <MotionBox delay={0.2}>
                        <p className="text-2xl font-bold">“ Making Simple - Construction Projects ” We Build Homes Everyday</p>
                        <p className="text-lg font-semibold">MAI Experts at your service!</p>
                    </MotionBox>
                </div>

                <div className="w-full flex justify-start">
                    <MotionBox delay={0.4}>
                        <p className="text-2xl font-bold">Vision</p>
                        <p className="text-lg font-semibold">Creating the easiest, most efficient & reliable technology to serve the Construction Industry.</p>
                    </MotionBox>
                </div>

                <div className="w-full flex justify-start">
                    <MotionBox delay={0.6}>
                        <p className="text-2xl font-bold">Mission</p>
                        <p className="text-lg font-semibold">Growing together with Individual Traders & SMEs</p>
                    </MotionBox>
                </div>
            </div>

            <div className="relative bg-white lg:w-1/2 z-20">
                <div className="space-y-5">
                    <Image src={GMS} alt="GMS" width={1000} height={1000} />
                    <h2 className="text-4xl font-bold px-10">Our Founder's</h2>
                    <p className="px-10">GMS Kumar, the CEO of MAI embarked on his journey in the Construction industry at Work-Tops.com in the UK, where he put his 10+ years of experience in the Stone industry, and eight years in Recruitment and Education Consulting. He has set out to venture into the marketplace world with MAI (Myproject.ai), a platform catering to diverse construction needs for the people of the UK & Europe via .coms & mobile applications. His track record includes pioneering Microsoft Dynamic CRM in international student recruitment, implementing SAP at a prestigious Solicitor firm, launching a PHP-based Stone Industry marketplace and integrating cutting-edge Artificial Intelligence into Work-Tops.com.</p>
                </div>
                <div className="absolute top-0 -left-10 h-full w-10 bg-gradient-to-l from-white to-transparent"></div>
            </div>
        </section>
    );
}
