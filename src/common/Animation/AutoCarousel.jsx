"use client";
import { motion } from "framer-motion";

export default function AutoCarousel({ items, speed = 30, className = "" }) {
    /**
     * items = array of React nodes (cards, divs, etc.)
     * speed = duration (in seconds) for one full loop
     */

    return (
        <div className={`relative w-full overflow-hidden ${className}`}>
            {/* Track */}
            <motion.div className="flex" animate={{ x: ["0%", "-320%"] }} transition={{ repeat: Infinity, duration: speed, ease: "linear", }}>
                {[...items, ...items].map((item, index) => (
                    <div key={index} className="flex-shrink-0 w-[80%] sm:w-[50%] md:w-[40%] px-4">
                        {item}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}