"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import TestimonialForm from "../HRPanel/Testimonials/TestimonialForm";

export default function WriteAboutUs() {
    const [open, setOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();
    const menuVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }, };

    const items = [
        { id: 1, label: "Add Testimonial", action: () => setShowModal(true) },
        { id: 2, label: "Contact Us", action: () => router.push("/contact") },
    ];

    return (
        <div className="fixed bottom-5 right-5 z-50 font-urbanist">
            <div className="relative">
                <button onClick={() => setOpen(!open)} className="flex items-center justify-center w-12 h-12 bg-black/10 backdrop-blur-sm text-[#003F6B] rounded-full shadow">
                    {open ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
                </button>

                <AnimatePresence>
                    {open && (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ duration: 0.2 }} className="absolute bottom-14 right-0 text-[#D2BFA4] space-y-2 w-44 flex flex-col items-end">
                            {items?.map((item, index) => (
                                <motion.p key={item?.id} variants={menuVariants} initial="hidden" animate="visible" exit="hidden" transition={{ duration: 0.2, delay: index * 0.1 }} onClick={() => { setOpen(false); item.action(); }} className=" bg-gray-100/10 backdrop-blur-sm border border-[#D2BFA4] rounded-xl shadow-lg  px-4 py-1 w-fit cursor-pointer hover:text-blue-600">
                                    {item?.label}
                                </motion.p>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {showModal && (
                    <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
                        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} className="bg-[#D2BFA4] p-2 rounded-xl shadow-xl w-full mx-2 lg:min-w-[600px] max-w-xl">
                            <TestimonialForm />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}