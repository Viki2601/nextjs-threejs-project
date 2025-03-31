"use client";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <div className="bg-white overflow-hidden font-urbanist">
            {/* Footer Content */}
            <div className="px-4 md:px-10 py-5 flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0">
                {/* Left Section: Informations and Social Links */}
                <div className="w-full md:w-1/2 flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
                    {/* Informations */}
                    <div className="w-full md:w-1/2">
                        <h2 className="font-bold text-lg md:text-xl py-2">Informations</h2>
                        <ul className="space-y-2 md:space-y-3 text-base">
                            <li>Privacy Policy</li>
                            <li>CSR Policy</li>
                            <li>Terms & Conditions</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="w-full md:w-1/2">
                        <h2 className="font-bold text-lg md:text-xl py-2">Get Connected with</h2>
                        <ul className="space-y-2 md:space-y-3 text-base">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                            <li>YouTube</li>
                        </ul>
                    </div>
                </div>

                {/* Right Section: Company Details */}
                <div className="w-full md:w-1/2 space-y-3 md:space-y-5">
                    {/* Registered As */}
                    <h2 className="w-full flex flex-col space-y-1">
                        <span className="font-semibold text-base">
                            REGISTERED AS CAINMAI SOFTWARE & EXPORT SERVICE PRIVATE LIMITED
                        </span>
                    </h2>

                    {/* CIN and Address */}
                    <h2 className="w-full flex flex-col space-y-1 text-base font-semibold">
                        <span>CIN No: U62013TN2023PTC1628</span>
                        <span>
                            MAI House, 238 & 239, Sai Baba Street, Sri Jayanthi Nagar, Pattaravakkam, Chennai - 600053
                        </span>
                    </h2>

                    {/* Copyright */}
                    <p className="text-sm md:text-base">© Copyrights MAI. All Rights Reserved</p>
                </div>
            </div>

            {/* H1 Text with Smooth In-View Animation */}
            <motion.h1
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.9, delay: 0.2, type: "spring", stiffness: 220, damping: 35 }}
                viewport={{ once: false, amount: 0.3 }} // Adjust visibility trigger
                className="text-[55px] md:text-8xl lg:text-[180px] text-center tracking-wide font-extrabold py-10 md:py-24 overflow-visible"
            >
                MAI Corporation
            </motion.h1>

        </div>
    );
}