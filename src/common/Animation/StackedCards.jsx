"use client";
import { motion, useTransform } from "framer-motion";
import Image from "next/image";

export default function StackedCards({ data, scrollYProgress, containerRef }) {

    return (
        <section ref={containerRef} className="relative h-[500vh] font-urbanist">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
                <h2 className="text-6xl font-bold mb-16 text-center text-white">Primary Objective</h2>

                <div className="relative w-full max-w-4xl mx-auto h-[60vh]">
                    {data?.map((card) => {
                        const scale = useTransform(scrollYProgress, [card?.stickyStart, card?.stickyEnd], [1, 0.92]);
                        const zIndex = useTransform(scrollYProgress, [card?.stickyStart, card?.stickyEnd], [10 + card?.id * 5, 10 + card?.id * 5]);
                        const rotate = useTransform(scrollYProgress, [card?.stickyStart - 0.1, card?.stickyStart + 0.1], [0, card?.rotation]);

                        return (
                            <motion.div key={card?.id} style={{ y: card?.y, opacity: card?.opacity, scale, zIndex, rotate }} className={`absolute top-0 left-0 right-0 flex flex-col lg:flex-row items-center space-x-3 p-8 rounded-3xl backdrop-blur-md bg-white border-8 border-white/30 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] origin-center before:content-[''] before:absolute before:inset-0  before:rounded-3xl before:p-[2px]  before:bg-gradient-to-br before:from-white/60 before:to-white/10 before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude]`}>
                                <Image src={card?.img} height={1000} width={1000} alt="Objectives" className="w-52" />
                                <div className="text-2xl leading-relaxed">
                                    {card?.content}
                                </div>
                                <div className="absolute top-4 right-4 text-gray-400 text-sm">
                                    0{card?.id}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}