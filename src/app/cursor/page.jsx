'use client';

import { useEffect, useState } from 'react';
import { motion } from "framer-motion";

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        };
        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);
    return (
        <motion.div className='w-[25px] h-[25px] bg-white mix-blend-difference rounded-full fixed z-[9999]' animate={{ x: position.x + 10, y: position.y + 10 }}></motion.div>
    )
}

export default Cursor