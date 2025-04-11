"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import Banner from "@/app/assets/landing/Kitchen.jpg"; // Replace with dynamic images if you want

const data = [
    { name: "Bathroom Fitters", desc: "We specialise in a diverse range of bathroom installation services throughout London, ensuring excellence in every aspect of our work." },
    { name: "Plumbers", desc: "Our expertise in plumbing spans a comprehensive array of services, including installation and repair of piping systems, radiators, and more." },
    { name: "Painters", desc: "From paint and wallpaper stripping to expert plastering, wallpapering, and a spectrum of painting services, we bring creativity to every surface." },
    { name: "Carpenters and Decorators", desc: "We specialize in carpentry services, crafting everything from cupboards to fitted furniture with precision and excellence." },
    { name: "Kitchen Fitters", desc: "Transform your space with exquisite designs. Our expert advice covers everything from colours to cabinetry and lighting." },
    { name: "Electricians", desc: "Our team provides all necessary services, from lighting upgrades to electrical panel installations, ensuring precision and excellence." },
    { name: "Flooring", desc: "Our services include floor installations, painting, decorating, decking, fencing, and door and window installation." },
    { name: "Roofing Contractors", desc: "From roof repairs to full replacements, we ensure the highest quality craftsmanship to protect your home." },
];

export default function About() {
    const sectionRef = useRef(null);

    return (
        <section ref={sectionRef} className="w-full bg-[#f8f9fa] font-urbanist">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-10 py-6"
                >
                    {/* Sticky Content */}
                    <div className="sticky top-40 h-fit self-start">
                        <div className="bg-[#4FC3F7] text-white/80 rounded-3xl p-6 sm:p-12 space-y-4 shadow-xl">
                            <div className="bg-white text-[#4FC3F7] w-fit px-4 py-2 rounded-full text-sm font-semibold tracking-wider">
                                {item.name}
                            </div>
                            <h1 className="text-3xl sm:text-6xl font-bold leading-tight">
                                {item.name}
                            </h1>
                            <p className="text-base sm:text-lg opacity-80">{item.desc}</p>
                        </div>
                    </div>

                    {/* Right Image or Card */}
                    <motion.div
                        initial={{ opacity: 0}}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-3xl overflow-hidden shadow-xl h-fit"
                    >
                        <Image
                            src={Banner}
                            alt={item.name}
                            className="object-cover w-full h-fit"
                            priority
                        />
                    </motion.div>
                </div>
            ))}
        </section>

    );
}
