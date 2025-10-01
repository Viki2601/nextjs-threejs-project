"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Ticker({ items = [], speed = 50, hoverSpeed = 15, direction = "left", className = "", }) {
    const [isHovered, setIsHovered] = useState(false);
    const animationSpeed = isHovered ? hoverSpeed : speed;
    const animateX = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

    return (
        <div className={`relative overflow-hidden group ${className}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <motion.div className="flex w-max gap-6" animate={{ x: animateX }} transition={{ repeat: Infinity, ease: "linear", duration: animationSpeed }}>
                {[...items, ...items]?.map((item, i) => (
                    <div key={i} className="w-[350px] min-h-[250px] bg-[#D2BFA4] text-[#003F6B] rounded-2xl shadow-lg p-6 flex flex-col justify-between">
                        <div className="flex space-x-1 text-white mb-3">
                            {"★".repeat(5).split("").map((star, j) => (
                                <span key={j}>{star}</span>
                            ))}
                        </div>
                        <p className="text-lg leading-relaxed">
                            "{item?.quote}"
                        </p>
                        <div className="flex items-center space-x-3 mt-5">
                            <Image src={item?.image} alt={item?.name} width={1500} height={1500} priority className="w-10 h-10 rounded-full object-cover" />
                            <div>
                                <p className="font-semibold">{item.name}</p>
                                <p className="text-sm opacity-75">{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}