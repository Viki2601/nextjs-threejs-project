"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import MAI from "@/app/assets/landing/MAI.png";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const menuVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.5 } },
    };

    const linkVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: { delay: i * 0.15, type: "spring", stiffness: 120 },
        }),
    };

    return (
        <div className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-8 bg-gradient-to-b from-[#003F6B]/90 via-[#003F6B]/50 to-transparent ${pathname === "/hrPortal" ? "hidden" : "fixed"}`}>
            {/* Logo */}
            <button onClick={() => router.push("/")} className="focus:outline-none cursor-pointer"> {/* ✅ Use button for navigation */}
                <Image src={MAI} alt="MAI" height={1000} width={1000} className="w-24 object-fill" />
            </button>

            {/* Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="text-white z-50">
                {isOpen ? <RiCloseLine size={32} /> : <RiMenu3Line size={32} />}
            </button>

            {/* Fullscreen Overlay */}
            {isOpen && (
                <motion.div initial="hidden" animate="visible" exit="hidden" variants={menuVariants} className="w-full fixed inset-0 bg-black/90 flex flex-col items-center justify-center space-y-8">
                    {["Home", "About", "Careers", "CSR", "Testimonials", "Contact"].map((item, index) => (
                        <motion.div key={item} custom={index} initial="hidden" animate="visible" variants={linkVariants} className="relative w-full text-center">
                            <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-white w-full font-urbanist text-4xl font-semibold tracking-widest uppercase  transition-all duration-500 relative group hover:text-gray-300 hover:border-t-2 hover:border-b-2" onClick={() => setIsOpen(false)} >
                                {item}
                            </Link>
                        </motion.div>
                    ))}

                </motion.div>
            )}
        </div>
    );
}