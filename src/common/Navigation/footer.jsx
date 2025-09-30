"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    return (
        <div className={`bg-white overflow-hidden font-urbanist ${pathname === "/hrPortal" ? "hidden" : "block"} `}>
            <div className="px-4 md:px-10 py-5 flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0">
                <div className="w-full md:w-1/2 flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
                    <div className="w-full md:w-1/2">
                        <h2 className="font-bold text-lg md:text-xl py-2">Informations</h2>
                        <ul className="space-y-2 md:space-y-3 text-base">
                            <li>
                                <Link href="/privacy-policy" className="hover:text-blue-600">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/csr/policy" className="hover:text-blue-600">
                                    CSR Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-blue-600">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-blue-600">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="font-bold text-lg md:text-xl py-2">Get Connected with</h2>
                        <ul className="space-y-2 md:space-y-3 text-base">
                            <li>
                                <Link href="https://facebook.com" target="_blank" className="hover:text-blue-600">
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com" target="_blank" className="hover:text-blue-600">
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link href="https://linkedin.com" target="_blank" className="hover:text-blue-600">
                                    LinkedIn
                                </Link>
                            </li>
                            <li>
                                <Link href="https://youtube.com" target="_blank" className="hover:text-blue-600">
                                    YouTube
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full md:w-1/2 space-y-3 md:space-y-5">
                    <h2 className="w-full flex flex-col space-y-1">
                        <span className="font-semibold text-base">
                            REGISTERED AS CAINMAI SOFTWARE & EXPORT SERVICE PRIVATE LIMITED
                        </span>
                    </h2>
                    <h2 className="w-full flex flex-col space-y-1 text-base font-semibold">
                        <span>CIN No: U62013TN2023PTC1628</span>
                        <span>
                            MAI House, 238 & 239, Sai Baba Street, Sri Jayanthi Nagar, Pattaravakkam, Chennai - 600053
                        </span>
                    </h2>
                    <p className="text-sm md:text-base">© Copyrights MAI. All Rights Reserved</p>
                </div>
            </div>

            <motion.h1 initial={{ y: 100, opacity: 0 }} whileInView={{ y: 30, opacity: 1 }} exit={{ y: 100, opacity: 0 }} transition={{ duration: 0.9, delay: 0.2, type: "spring", stiffness: 220, damping: 35 }} viewport={{ once: false, amount: 0.3 }} className="text-[62px] md:text-8xl lg:text-[180px] text-center tracking-wider font-extrabold overflow-visible">
                MAI Corporation
            </motion.h1>
        </div>
    );
}