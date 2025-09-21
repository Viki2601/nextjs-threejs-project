'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const faqs = [
  {
    question: "MAI",
    button: "/about",
    answer:
      "MAI Corporation serves as a platform connecting homeowners with construction-related service providers, offering tailored solutions to address construction challenges",
  },
  {
    question: "SAB",
    button: "/csr",
    answer:
      "SAB's primary objective is to raise awareness about the critical importance of nurturing strong bonds within diverse family dynamics. Whether it involves the relationship between a mother and daughter, father and son, husband and wife, or any other familial connection, we highlight the significance of strengthening these bonds. We firmly believe that a healthy family serves as the cornerstone of a prosperous nation. A well-supported child excels in learning, exudes positivity, and ultimately contributes to building a stronger society.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const toggleFAQ = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleRedirect = (path) => {
    router.push(path);
  };

  return (
    <section className="text-white w-full px-6 py-20 font-urbanist">
      <div className="mx-auto space-y-10 w-full">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            layout
            transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
            className={`flex flex-col md:flex-row justify-between items-start rounded-xl overflow-hidden transition-all duration-700 ${
              activeIndex === idx ? "bg-white text-black" : "bg-white/5 text-white"
            }`}
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(idx)}
              className="w-full md:w-1/2 text-left px-6 py-5 flex justify-between items-center font-bold text-3xl sm:text-6xl"
            >
              {faq.question}
            </button>

            {/* Answer + Redirect Button */}
            <AnimatePresence initial={false}>
              {activeIndex === idx && (
                <motion.div
                  key="content"
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1}}
                  exit={{ opacity: 0}}
                  transition={{ duration: 0.3 }}
                  className="w-full md:w-1/2 px-6 py-5 font-semibold text-base sm:text-2xl text-left space-y-4"
                >
                  <p>{faq.answer}</p>
                  <button
                    onClick={() => handleRedirect(faq.button)}
                    className="mt-4 inline-block bg-black text-white px-5 py-2 rounded-full hover:bg-zinc-800 transition-colors duration-300"
                  >
                    Learn More
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
