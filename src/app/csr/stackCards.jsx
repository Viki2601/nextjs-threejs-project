"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Objective1 from "@/app/assets/landing/Objective1.png";
import Objective2 from "@/app/assets/landing/Objective2.png";
import Objective3 from "@/app/assets/landing/Objective3.png";
import Objective4 from "@/app/assets/landing/Objective4.png";
import Objective5 from "@/app/assets/landing/Objective5.png";
import Objective6 from "@/app/assets/landing/Objective6.png";
import Image from "next/image";


export default function StackedCards() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    // Animation values for each card
    const card1Y = useTransform(scrollYProgress, [0, 0.3], [500, 0]);
    const card1Opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    const card2Y = useTransform(scrollYProgress, [0.2, 0.5], [500, 0]);
    const card2Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

    const card3Y = useTransform(scrollYProgress, [0.4, 0.7], [500, 0]);
    const card3Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

    const card4Y = useTransform(scrollYProgress, [0.6, 0.9], [500, 0]);
    const card4Opacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

    const card5Y = useTransform(scrollYProgress, [0.8, 1.1], [500, 0]);
    const card5Opacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

    const card6Y = useTransform(scrollYProgress, [1, 1.3], [500, 0]);
    const card6Opacity = useTransform(scrollYProgress, [1, 1.2], [0, 1]);

    const cards = [
        {
            id: 1,
            content: "Ensure that family counselling services are easily accessible to individuals and families, removing barriers such as financial constraints or geographical limitations.",
            y: card1Y,
            opacity: card1Opacity,
            stickyStart: 0.3,
            stickyEnd: 0.6,
            rotation: 5, // degrees
            img: Objective1
        },
        {
            id: 2,
            content: "Provide comprehensive mental health support that addresses the diverse needs of families, including emotional, psychological, and relational aspects.",
            y: card2Y,
            opacity: card2Opacity,
            stickyStart: 0.5,
            stickyEnd: 0.8,
            rotation: -2, // degrees
            img: Objective2
        },
        {
            id: 3,
            content: "Tailor family counselling services to be culturally sensitive and inclusive, recognizing and respecting diverse backgrounds and belief systems.",
            y: card3Y,
            opacity: card3Opacity,
            stickyStart: 0.7,
            stickyEnd: 1,
            rotation: 3, // degrees
            img: Objective3
        },
        {
            id: 4,
            content: "Develop specialized programs for different family structures and life stages, from newly formed families to multigenerational households.",
            y: card4Y,
            opacity: card4Opacity,
            stickyStart: 0.9,
            stickyEnd: 1.2,
            rotation: -4, // degrees
            img: Objective4
        },
        {
            id: 5,
            content: "Implement outreach initiatives to raise awareness about mental health and reduce stigma surrounding family counselling services.",
            y: card5Y,
            opacity: card5Opacity,
            stickyStart: 1.1,
            stickyEnd: 1.4,
            rotation: 5, // degrees
            img: Objective5
        },
        {
            id: 6,
            content: "Establish partnerships with community organizations to create a network of support services for families in need.",
            y: card6Y,
            opacity: card6Opacity,
            stickyStart: 1.2,
            stickyEnd: 1.6,
            rotation: -2, // degrees
            img: Objective6
        }
    ];

    return (
        <section ref={containerRef} className="relative h-[500vh] font-urbanist">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
                <h2 className="text-6xl font-bold mb-16 text-center text-white">Primary Objective</h2>

                <div className="relative w-full max-w-4xl mx-auto h-[60vh]">
                    {cards.map((card) => {
                        const scale = useTransform(
                            scrollYProgress,
                            [card.stickyStart, card.stickyEnd],
                            [1, 0.92]
                        );

                        const zIndex = useTransform(
                            scrollYProgress,
                            [card.stickyStart, card.stickyEnd],
                            [10 + card.id * 5, 10 + card.id * 5]
                        );

                        const rotate = useTransform(
                            scrollYProgress,
                            [card.stickyStart - 0.1, card.stickyStart + 0.1],
                            [0, card.rotation]
                        );

                        return (
                            <motion.div key={card.id} style={{ y: card.y, opacity: card.opacity, scale, zIndex, rotate }}
                                className={`absolute top-0 left-0 right-0 flex flex-col lg:flex-row items-center space-x-3 p-8 rounded-3xl backdrop-blur-md bg-white border-8 border-white/30 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] origin-center before:content-[''] before:absolute before:inset-0  before:rounded-3xl before:p-[2px]  before:bg-gradient-to-br before:from-white/60 before:to-white/10 before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]`}
                            >
                                <Image src={card.img} height={1000} width={1000} alt="Objectives" className="w-52"/>
                                <div className="text-2xl leading-relaxed">
                                    {card.content}
                                </div>
                                <div className="absolute top-4 right-4 text-gray-400 text-sm">
                                    0{card.id}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}