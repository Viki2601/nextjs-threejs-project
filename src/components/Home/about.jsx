"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import Banner from "@/app/assets/landing/GMS.jpg";

export default function About() {
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} className="w-full bg-[#F8F9FA] font-urbanist">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-10 py-6">
                {/* Sticky Content */}
                <div className="sticky top-40 h-fit self-start">
                    <div className="bg-[#003F6B] text-white/80 rounded-3xl p-6 sm:p-12 space-y-4 shadow-xl">
                        <h1 className="text-3xl sm:text-6xl font-bold leading-tight">
                            "Making Simple Construction Projects"
                        </h1>
                        <p className="text-xl sm:text-2xl font-bold">We Build Homes Everyday</p>
                        <p className="text-base sm:text-lg font-semibold">MAI Experts at your service!</p>
                    </div>
                </div>

                {/* Right Image or Card */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-3xl overflow-hidden shadow-xl h-fit">
                    <Image src={Banner} alt={"Banner"} className="object-cover w-full h-fit" priority />
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-10 py-6">
                {/* Sticky Content */}
                <div className="sticky top-40 h-fit self-start">
                    <div className="bg-[#F2C94C] text-white/80 rounded-3xl p-6 sm:p-12 space-y-4 shadow-xl">
                        <h1 className="text-3xl sm:text-6xl font-bold leading-tight">
                            "Vision"
                        </h1>
                        <p className="text-base sm:text-lg font-semibold">Creating the easiest, most efficient & reliable technology to serve the Construction Industry.</p>
                    </div>
                </div>

                {/* Right Card */}
                <div className="sticky top-40 h-fit self-start">
                    <div className="bg-white text-[#003F6B]/80 rounded-3xl p-6 sm:p-12 space-y-4 shadow-xl">
                        <h1 className="text-3xl sm:text-6xl font-bold leading-tight">
                            "Mission"
                        </h1>
                        <p className="text-base sm:text-lg font-semibold">Growing together with Individual Traders & SMEs through innovative construction solutions.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 px-4 sm:px-10 py-6">
                <div className="bg-[#d8ccb5] text-white/80 rounded-3xl p-6 sm:p-12 space-y-4 shadow-xl">
                    <h1 className="text-3xl sm:text-6xl font-bold leading-tight">
                        "Our Founder’s"
                    </h1>
                    <p className="text-base sm:text-lg font-semibold">GMS Kumar, the CEO of MAI embarked on his journey in the Construction industry at Work-Tops.com in the UK, where he put his 10+ years of experience in the Stone industry, and eight years in Recruitment and Education Consulting. He has set out to venture into the marketplace world with MAI (Myproject.ai), a platform catering to diverse construction needs for the people of the UK & Europe via .coms & mobile applications. His track record includes pioneering Microsoft Dynamic CRM in international student recruitment, implementing SAP at a prestigious Solicitor firm, launching a PHP-based Stone Industry marketplace and integrating cutting-edge Artificial Intelligence into Work-Tops.com.</p>
                </div>
            </div>
        </section>

    );
}