"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function LetterReveal({ text, className = "" }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const letters = text.split("");

    return (
        <span ref={ref} className={`inline-block whitespace-pre-wrap ${className}`}>
            {letters.map((char, i) => {
                const start = i * 0.02;
                const end = start + 0.2;
                const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

                return (
                    <motion.span key={i} style={{ opacity }} transition={{ ease: "easeOut" }} className="inline-block">
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                );
            })}
        </span>
    );
}