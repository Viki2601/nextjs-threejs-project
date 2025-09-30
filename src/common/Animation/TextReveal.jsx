'use client';
import { motion } from "framer-motion";

export default function TextReveal({ children, className = "" }) {
    return (
        <motion.div initial={{ y: 24, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.6, ease: "easeOut" }} className={className}>
            {children}
        </motion.div>
    );
}