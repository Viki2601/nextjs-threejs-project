"use client";
import { motion } from "framer-motion";
import SABBG from "@/app/assets/landing/SAB.png";
import Image from "next/image";
import StackCardsSection from "./stackCards";
import InnovativeFAQ from "./faq";
import HorizontalImageScroll from "./gallery";

export default function CSRpage() {
    const services = [
        {
            id: "01",
            description:
                "MAI initiates a holistic approach to community well-being by extending its “Family Counselling Services” to the general public, fostering mental health and support for families in need through its project SAB.",
        },
        {
            id: "02",
            description:
                "The visionary movement initiated by MAI; SAB, is centred around fostering stronger families and building enduring relationships, is indeed commendable. The commitment to enhancing family unity through the 'Building Strong Families' initiative reflects a holistic approach aimed at creating nurturing environments where every family member feels valued, supported, and connected.",
        },
        {
            id: "03",
            description:
                "Expanding beyond the digital realm to integrate physical awareness programs is a significant step forward. Offering hands-on support to those in need, with a specific focus on the health and well-being of family relationships, underscores a genuine dedication to making a tangible impact on individuals' lives.",
        },
        {
            id: "04",
            description:
                "Through impactful awareness campaigns, both online and offline, MAI - SAB has the potential to become a beacon of hope for families seeking guidance and support. By fostering a sense of unity, understanding, and resilience within families, this movement can contribute significantly to building a more compassionate and cohesive society.",
        },
        {
            id: "05",
            description:
                "As the initiative progresses, it will be essential to maintain a steadfast commitment to the core values of empathy, inclusivity, and empowerment. By staying true to these principles, SAB can continue to inspire positive change and make a lasting difference in the lives of countless families.",
        },
    ];

    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row w-full font-urbanist bg-[#003F6B]">
                {/* Left Sticky Section */}
                <div className="w-full md:w-2/5 h-[56vh] md:h-screen flex flex-col items-center justify-center space-y-5 sticky bottom-0 md:top-0 rounded-t-full md:rounded-t-none md:rounded-r-full bg-[#FFCC29] p-6">
                    <Image src={SABBG} width={1000} height={1000} alt="SAB" className="w-44 lg:hidden" />
                    <h1 className="text-3xl md:text-5xl font-bold text-[#2E4372] text-center leading-tight">
                        A Visionary Movement <br /> To Build Strong Families - CSR
                    </h1>
                    <p className="text-[#2E4372] max-w-lg text-center">SAB's primary objective is to raise awareness about the critical importance of nurturing strong bonds within diverse family dynamics. Whether it involves the relationship between a mother and daughter, father and son, husband and wife, or any other familial connection, we highlight the significance of strengthening these bonds. We firmly believe that a healthy family serves as the cornerstone of a prosperous nation. A well-supported child excels in learning, exudes positivity, and ultimately contributes to building a stronger society.</p>
                </div>

                {/* Right Scrolling Section */}
                <div className="w-full md:w-3/5 space-y-16 md:space-y-24 p-6 md:p-10 bg-[#003F6B]">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center items-center h-[70vh] space-y-4 text-center"
                        >
                            <div className="text-6xl md:text-9xl text-gray-400 font-bold">
                                {service.id}
                            </div>
                            <p className="text-[#F5F5F5] tracking-widest text-lg md:text-xl max-w-3xl">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <StackCardsSection />
            <InnovativeFAQ />
            <HorizontalImageScroll />
        </div>
    );
}
