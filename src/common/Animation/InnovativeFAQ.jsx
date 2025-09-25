"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function InnovativeFAQ({ data }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (index >= 0 && index < data?.length) {
            setActiveIndex(activeIndex === index ? null : index);
        }
    };

    return (
        <section className="py-20 px-4 bg-white font-urbanist">
            <div className="max-w-6xl mx-auto">
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl font-bold text-center mb-16 text-gray-800">
                    How to Get Involved & Make a Difference
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {data?.map((faq, index) => (
                        <motion.div key={`faq-${index}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="relative" >
                            <div className={`p-8 rounded-2xl shadow-md cursor-pointer transition-all duration-300 ${activeIndex === index ? "bg-white shadow-lg" : "bg-white hover:bg-gray-100"}`} onClick={() => toggleFAQ(index)}>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-semibold text-gray-800">
                                        {faq?.question}
                                    </h3>
                                    {activeIndex === index ? (
                                        <FiChevronUp className="text-[#003F6B] text-xl" />
                                    ) : (
                                        <FiChevronDown className="text-[#003F6B] text-xl" />
                                    )}
                                </div>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                                            <p className="pt-4 text-gray-600">
                                                {faq?.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}