"use client";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * ScrollLinked Component
 * -----------------------
 * Reusable scroll progress bar that tracks page scroll.
 *
 */
export default function TopScroll({ color = "#ff0088", height = 6 }) {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })
    return (
        <motion.div id="scroll-indicator" style={{ scaleX, position: "fixed", top: 0, left: 0, right: 0, height: height, originX: 0, backgroundColor: color, zIndex: 9999, }} />
    );
}